import axios from 'axios';

const id = 'Iv1.a5e06c0b0d771b77';
const sec = '7d35315398bf0512603c71a2c49f32b3fe70909f';
const params = `?client_id=${id}&client_secret=${sec}`;

function getProfile(username, token) {
    return axios
        .get(`https://api.github.com/users/${username}${params}`, token)
        .then(user => user.data);
}

function getRepos(username, token) {
    return axios
        .get(`https://api.github.com/users/${username}/repos${params}&per_page=100`, token)
        .then(user => user.data);
}

function getStarCount(repos) {
    return repos.reduce((count, repo) => count + repo.stargazers_count, 0);
}

function calculateScore(profile, repos) {
    const followers = profile.followers;
    const totalStars = getStarCount(repos);

    return followers * 3 + totalStars;
}

function getUserData(player, token) {
    return axios.all([getProfile(player, token), getRepos(player, token)], token).then(data => {
        const [profile, repos] = data;

        return {
            profile,
            score: calculateScore(profile, repos),
        };
    });
}

function sortPlayers(players) {
    return players.sort((a, b) => b.score - a.score);
}

export function battle(players) {
    const source = axios.CancelToken.source();
    const token = { cancelToken: source.token };

    return {
        get(players) {
            return axios
                .all(players.map(player => getUserData(player, token)))
                .then(player => sortPlayers(player));
        },
        cancel() {
            if (typeof source !== typeof undefined) {
                return source.cancel('Battle canceled due change of route.');
            }
        },
    };
}

export function fetchPopularRepos(language) {
    const source = axios.CancelToken.source();
    const token = { cancelToken: source.token };

    const encodedURI = window.encodeURI(
        `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
    );

    return {
        get(language) {
            return axios.get(encodedURI, token).then(res => res.data.items);
        },
        cancel() {
            if (typeof source !== typeof undefined) {
                return source.cancel('Fetching of the popular repos canceled due change of route.');
            }
        },
    };
}
