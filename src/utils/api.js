import axios from 'axios';

const id = 'Iv1.a5e06c0b0d771b77';
const sec = '7d35315398bf0512603c71a2c49f32b3fe70909f';
const params = `?client_id=${id}&client_secret=${sec}`;

function getProfile(username) {
    return axios.get(`https://api.github.com/users/${username}${params}`).then(user => user.data);
}

function getRepos(username) {
    return axios
        .get(`https://api.github.com/users/${username}/repos${params}&per_page=100`)
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

function handleError(error) {
    console.warn(error);
    return null;
}

function getUserData(player) {
    return axios.all([getProfile(player), getRepos(player)]).then(data => {
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
    return axios
        .all(players.map(player => getUserData(player)))
        .then(player => sortPlayers(player))
        .catch(err => handleError(err));
}

export function fetchPopularRepos(language) {
    const source = axios.CancelToken.source();

    const encodedURI = window.encodeURI(
        `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
    );

    return {
        get(language) {
            return axios.get(encodedURI, { cancelToken: source.token }).then(res => res.data.items);
        },
        cancel() {
            if (typeof source != typeof undefined) {
                return source.cancel('Fetching of the popular repos canceled due change of route.');
            }
        },
    };
}
