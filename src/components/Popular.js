import React, { Component, Fragment } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { fetchPopularRepos } from '../services/api';

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

    componentWillUnmount() {
        this.popularRepos.cancel();
    }

    updateLanguage = lang => {
        return this.popularRepos
            .get(lang)
            .then(res => this.setState({ repos: res }))
            .catch(err => console.log(err));
    };

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
