import React, { Component, Fragment } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { fetchPopularRepos } from '../services/api';

import SelectLanguage from './SelectLanguage';
import RepoGrid from './RepoGrid';
import Loading from './Loading';

export default class Popular extends Component {
    state = {
        selectedLanguage: 'All',
        repos: null,
    };

    popularRepos = fetchPopularRepos();

    componentDidMount() {
        this.updateLanguage(this.state.selectedLanguage);
    }

    componentWillUnmount() {
        this.popularRepos.cancel();
    }

    updateLanguage = lang => {
        this.setState({ selectedLanguage: lang, repos: null });

        this.popularRepos
            .get(lang)
            .then(res => this.setState({ repos: res }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Fragment>
                <SelectLanguage
                    selectedLanguage={this.state.selectedLanguage}
                    onClick={this.updateLanguage}
                />
                {!this.state.repos ? <Loading /> : <RepoGrid repos={this.state.repos} />}
            </Fragment>
        );
    }
}
