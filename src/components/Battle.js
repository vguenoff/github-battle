import React, { Component } from 'react';
import styled from 'styled-components';

export default class Battle extends Component {
    render() {
        return (
            <StyledBattle>
                <p>Battle!</p>
            </StyledBattle>
        );
    }
}

const StyledBattle = styled.div``;
