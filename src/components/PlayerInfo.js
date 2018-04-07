import React, { Component } from 'react';
import styled from 'styled-components';

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

const StyledHome = styled.div``;
