import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default class Home extends Component {
    render() {
        return (
            <StyledHome>
                <h1>GithubBattle: Battle your friends... and stuff.</h1>
                <Link className="button" to="/battle">
                    Battle
                </Link>
            </StyledHome>
        );
    }
}

const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .button {
        text-decoration: none;
        color: #e6e6e6;
        background: #0a0a0a;
        border: none;
        font-size: 16px;
        border-radius: 3px;
        width: 200px;
        text-align: center;
        display: block;
        padding: 7px 0;
        margin: 10px auto;
        &:hover:enabled {
            background: linear-gradient(#1a1a1a, #0a0a0a);
            color: #fff;
            text-decoration: none;
        }
        &:active {
            transform: translateY(1px);
        }
    }
`;
