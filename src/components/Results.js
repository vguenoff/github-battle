import React, { Component } from 'react';
import queryString from 'query-string';
import styled from 'styled-components';

import { battle } from '../services/api';

export default class Results extends Component {
    componentDidMount() {
        const players = queryString.parse(this.props.location.search);
        const { playerOneName, playerTwoName } = players;

        this.doBattle
            .get([playerOneName, playerTwoName])
            .then(data => this.setState({ data }))
            .catch(err => console.log(err));
    }

    componentWillUnmount() {
        this.doBattle.cancel();
    }

    doBattle = battle();

    render() {
        return <StyledResults>Results</StyledResults>;
    }
}

const StyledResults = styled.div``;
