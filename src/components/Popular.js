import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import api from '../utils/api';

import SelectLanguage from './SelectLanguage';
import RepoGrid from './RepoGrid';

export default class Popular extends Component {
    state = {
        selectedLanguage: 'All',
        repos: null,
    };

    componentDidMount() {
        this.updateLanguage(this.state.selectedLanguage);
    }

    updateLanguage = lang => {
        this.setState({ selectedLanguage: lang, repos: null });

        api.fetchPopularRepos(lang).then(res => this.setState({ repos: res }));
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
