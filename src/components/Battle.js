import React, { Component } from 'react';
import styled from 'styled-components';

import PlayerInput from './PlayerInput';

export default class Battle extends Component {
    state = {
        playerOneName: '',
        playerOneImage: null,
        playerTwoName: '',
        playerTwoImage: null,
    };

    handleSubmit = (id, username) => {
        const key1 = `${id}Name`;
        const key2 = `${id}Image`;

        this.setState({
            [key1]: username,
            [key2]: `https://github.com/${username}.png?size=200`,
        });
    };

    render() {
        const { playerOneName, playerTwoName } = this.state;

        return (
                <div className="row">
                    {!playerOneName && (
                        <PlayerInput
                            id="playerOne"
                            label="Player One"
                            handleSubmit={this.handleSubmit}
                            className="column"
                        />
                    )}
                    {!playerTwoName && (
                        <PlayerInput
                            id="playerTwo"
                            label="Player Two"
                            handleSubmit={this.handleSubmit}
                            className="column"                            
                        />
                    )}
                </div>
        );
    }
}

const StyledBattle = styled.div`

`;
