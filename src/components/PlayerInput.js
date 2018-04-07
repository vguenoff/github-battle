import React, { Component } from 'react';
import { string, func } from 'prop-types';
import styled from 'styled-components';

import Button from '../StyledComponents/Button';

export default class PlayerInput extends Component {
    static propTypes = {
        id: string.isRequired,
        label: string.isRequired,
        handleSubmit: func.isRequired,
    };

    state = {
        username: '',
    };

    handleChange = e => this.setState({ username: e.target.value });

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleSubmit(this.props.id, this.state.username);
    };

    render() {
        return (
            <StyledPlayerInput onSubmit={this.handleSubmit}>
                <label htmlFor="username" className="header">
                    {this.props.label}
                </label>
                <input
                    type="text"
                    id="username"
                    placeholder="github user"
                    autoComplete="off"
                    onChange={this.handleChange}
                    value={this.state.username}
                    className="userInput"
                />
                <Button type="submit" disabled={!this.state.username}>
                    Submit
                </Button>
            </StyledPlayerInput>
        );
    }
}

const StyledPlayerInput = styled.form`
    display: flex;
    flex-direction: column;
    width: 500px;
    align-items: center;

    .header {
        font-size: 30px;
        font-weight: 200;
    }

    .userInput {
        border-radius: 3px;
        margin: 10px 0;
        padding: 5px;
        border: 1px solid rgba(0, 0, 0, 0.43);
        font-size: 16px;
        width: 80%;
    }
`;
