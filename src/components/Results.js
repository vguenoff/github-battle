import React, { Component } from 'react';
import queryString from 'query-string';
import styled from 'styled-components';

import { battle } from '../utils/api';

export default class Results extends Component {
    componentDidMount() {
        const players = queryString.parse(this.props.location.search);
        const { playerOneName, playerTwoName } = players;
        battle([playerOneName, playerTwoName]).then(data => console.log(data));
    }

    render() {
        return <StyledResults>Results</StyledResults>;
    }
}

const StyledResults = styled.div``;
