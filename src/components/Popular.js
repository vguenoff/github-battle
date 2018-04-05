import React, { Component, Fragment } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { fetchPopularRepos } from '../utils/api';

import SelectLanguage from './SelectLanguage';
import RepoGrid from './RepoGrid';

export default class Popular extends Component {
    state = {
        selectedLanguage: 'All',
        repos: null,
    };

    popularRepos = fetchPopularRepos();

    componentDidMount() {
        this.updateLanguage(this.state.selectedLanguage);
    }

    updateLanguage = lang => {
        return this.popularRepos
            .get(lang)
            .then(res => this.setState({ repos: res }))
            .catch(err => console.log(err));
    };

    componentWillUnmount() {
        this.popularRepos.cancel();
    }

    render() {
        return (
            <Fragment>
                <SelectLanguage
                    selectedLanguage={this.state.selectedLanguage}
                    onClick={lang => this.updateLanguage(lang)}
                />
                {!this.state.repos ? (
                    <p style={{ textAlign: 'center' }}>Loading...</p>
                ) : (
                    <RepoGrid repos={this.state.repos} />
                )}
            </Fragment>
        );
    }
}
