import axios from 'axios';

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
