import axios from 'axios';

export default {
    fetchPopularRepos(language) {
        // if (typeof this.source != typeof undefined) {
        //     this.source.cancel('Operation canceled due to new request.');
        // }

        // this.source = axios.CancelToken.source();

        const encodedURI = window.encodeURI(
            `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
            // { cancelToken: this.source.token }
        );

        return axios.get(encodedURI).then(res => res.data.items);
        // .catch(error => {
        //     if (axios.isCancel(error)) {
        //         console.log('Request canceled', error);
        //     } else {
        //         console.log(error);
        //     }
        // });
    },
};
