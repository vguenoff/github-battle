import React, { Component } from 'react';
import styled from 'styled-components';

export default class Results extends Component {
    render() {
        console.log(this.props);
        console.log(this.props.location.search);
        return <StyledResults>Results</StyledResults>;
    }
}

const StyledResults = styled.div``;
