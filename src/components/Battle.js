import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';
import Button from '../StyledComponents/Button';

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

    handleReset = id => {
        const key1 = `${id}Name`;
        const key2 = `${id}Image`;

        this.setState({
            [key1]: '',
            [key2]: null,
        });
    };

    render() {
        const { playerOneName, playerTwoName } = this.state;
        const { match } = this.props;

        return (
            <StyledBattle>
                <div className="row">
                    {!playerOneName ? (
                        <PlayerInput
                            id="playerOne"
                            label="Player One"
                            handleSubmit={this.handleSubmit}
                            className="column"
                        />
                    ) : (
                        <PlayerPreview
                            id="playerOne"
                            username={this.state.playerOneName}
                            image={this.state.playerOneImage}
                        >
                            <button
                                className="reset-btn"
                                onClick={() => this.handleReset('playerOne')}
                            >
                                Reset
                            </button>
                        </PlayerPreview>
                    )}
                    {!playerTwoName ? (
                        <PlayerInput
                            id="playerTwo"
                            label="Player Two"
                            handleSubmit={this.handleSubmit}
                            className="column"
                        />
                    ) : (
                        <PlayerPreview
                            id="playerTwo"
                            username={this.state.playerTwoName}
                            image={this.state.playerTwoImage}
                        >
                            <button
                                className="reset-btn"
                                onClick={() => this.handleReset('playerTwo')}
                            >
                                Reset
                            </button>
                        </PlayerPreview>
                    )}
                    <div className="battle-link">
                        {playerOneName &&
                            playerTwoName && (
                                <Link
                                    to={{
                                        pathname: `${match.url}/results`,
                                        search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`,
                                    }}
                                >
                                    <Button>Battle</Button>
                                </Link>
                            )}
                    </div>
                </div>
            </StyledBattle>
        );
    }
}

const StyledBattle = styled.div`
    .battle-link {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 30px;

        a {
            text-decoration: none;
        }
    }
    .reset-btn {
        cursor: pointer;
        color: #d0021b;
        border: none;
        text-decoration: underline;
        background: transparent;
        &:hover {
            text-decoration: none;
        }
    }
`;
