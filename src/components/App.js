import React, { Component } from 'react';
import styled from 'styled-components';

import Popular from './Popular';

export default class App extends Component {
    render() {
        return (
            <StyledApp>
                <Popular />
            </StyledApp>
        );
    }
}

const StyledApp = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;
