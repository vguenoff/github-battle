import React, { Component } from 'react';
import queryString from 'query-string';
import styled from 'styled-components';

import { battle } from '../services/api';

import Player from './Player';

export default class Results extends Component {
    state = {
        winner: null,
        loser: null,
        loading: true,
    };

    componentDidMount() {
        const players = queryString.parse(this.props.location.search);
        const { playerOneName, playerTwoName } = players;

        this.doBattle
            .get([playerOneName, playerTwoName])
            .then(([winner, loser]) => this.setState({ winner, loser, loading: false }))
            .catch(err => console.log(err));
    }

    componentWillUnmount() {
        this.doBattle.cancel();
    }

    doBattle = battle();

    render() {
        const { winner, loser, loading } = this.state;

        if (loading) {
            return <p>Loading...</p>;
        }

        return (
            <StyledResults>
                <div className="row">
                    <Player label="Winner" score={winner.score} profile={winner.profile} />
                    <Player label="Loser" score={loser.score} profile={loser.profile} />
                </div>
            </StyledResults>
        );
    }
}

const StyledResults = styled.div``;
