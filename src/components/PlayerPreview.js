import React, { Component } from 'react';
import { string, func } from 'prop-types';
import styled from 'styled-components';

const PlayerPreview = ({ onClick, id, image, username }) => (
    <StyledPlayerPreview>
        <img src={image} alt={`$Avatar for ${username}`} className="avatar" />
        <div className="text-content">
            <h2 className="user-name">@{username}</h2>
            <button className="reset" onClick={() => onClick(id)}>
                Reset
            </button>
        </div>
    </StyledPlayerPreview>
);

PlayerPreview.propTypes = {
    id: string.isRequired,
    username: string.isRequired,
    image: string.isRequired,
    onClick: func.isRequired,
};

const StyledPlayerPreview = styled.div`
    justify-content: center;
    .avatar {
        border-radius: 50%;
        width: 200px;
        height: 200px;
    }
    .text-content {
        text-align: center;
    }
    .user-name {
        margin: 5px 0;
    }
    .reset {
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

export default PlayerPreview;
