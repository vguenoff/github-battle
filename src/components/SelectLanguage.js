import React from 'react';
import { string, func } from 'prop-types';
import styled from 'styled-components';

const SelectLanguage = ({ selectedLanguage, onClick }) => {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

    return (
        <StyledSelectLanguage>
            {languages.map(lang => (
                <li
                    key={lang}
                    className={`list-item ${selectedLanguage === lang ? 'selected' : ''}`}
                    onClick={() => onClick(lang)}
                >
                    {lang}
                </li>
            ))}
        </StyledSelectLanguage>
    );
};

SelectLanguage.propTypes = {
    selectedLanguage: string.isRequired,
    onClick: func.isRequired,
};

const StyledSelectLanguage = styled.ul`
    display: flex;
    justify-content: center;

    .list-item {
        font-weight: bold;
        cursor: pointer;
        margin: 10px;
    }

    .selected {
        color: #d0021b;
    }
`;

export default SelectLanguage;
