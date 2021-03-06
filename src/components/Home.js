import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../StyledComponents/Button';

export default class Home extends Component {
    render() {
        return (
            <StyledHome>
                <h1>GithubBattle: Battle your friends... and stuff.</h1>
                <Link className="link" to="/battle">
                    <Button>Battle</Button>
                </Link>
            </StyledHome>
        );
    }
}

const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .link {
        text-decoration: none;
    }
`;
