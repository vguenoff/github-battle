import React, { Component } from 'react';
import { string, func, any } from 'prop-types';
import styled from 'styled-components';

const PlayerPreview = ({ children, image, username }) => (
    <StyledPlayerPreview>
        <img src={image} alt={`$Avatar for ${username}`} className="avatar" />
        <div className="text-content">
            <h2 className="user-name">@{username}</h2>
            {children}
        </div>
    </StyledPlayerPreview>
);

PlayerPreview.propTypes = {
    username: string.isRequired,
    image: string.isRequired,
    children: any,
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
`;

export default PlayerPreview;
