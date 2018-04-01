import React, { Component } from 'react';
import styled from 'styled-components';

export default class Popular extends Component {
    state = {
        languages: ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'],
        selectedLanguage: 'All',
    };

    updateLanguage = lang => {
        this.setState({ selectedLanguage: lang });
    };

    render() {
        const { languages, selectedLanguage } = this.state;

        return (
            <StyledPopular>
                {languages.map(lang => (
                    <li
                        key={lang}
                        className={`list-item ${selectedLanguage === lang ? 'selected' : ''}`}
                        onClick={() => this.updateLanguage(lang)}
                    >
                        {lang}
                    </li>
                ))}
            </StyledPopular>
        );
    }
}

const StyledPopular = styled.ul`
    display: flex;
    justify-content: center;

    .list-item {
        list-style-type: none;
        font-weight: bold;
        cursor: pointer;
        margin: 10px;
    }

    .selected {
        color: #d0021b;
    }
`;
