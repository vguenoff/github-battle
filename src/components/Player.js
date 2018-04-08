import React from 'react';
import { string, number, object } from 'prop-types';
import styled from 'styled-components';

import PlayerPreview from './PlayerPreview';

const Player = ({ label, score, profile }) => {
    return (
        <StyledPlayer>
            <h1 className="header">{label}</h1>
            <h3 style={{ textAlign: 'center' }}>Score: {score}</h3>
            <PlayerPreview username={profile.login} image={profile.avatar_url}>
                <ul className="space-list-items">
                    {profile.name && <li>{profile.name}</li>}
                    {profile.location && <li>{profile.location}</li>}
                    {profile.company && <li>{profile.company}</li>}
                    <li>Followers: {profile.followers}</li>
                    <li>Following: {profile.following}</li>
                    <li>Public repos: {profile.public_repos}</li>
                    {profile.blog && (
                        <li>
                            <a href={profile.blog}>{profile.blog}</a>
                        </li>
                    )}
                </ul>
            </PlayerPreview>
        </StyledPlayer>
    );
};

Player.propTypes = {
    label: string.isRequired,
    score: number.isRequired,
    profile: object.isRequired,
};

const StyledPlayer = styled.div`
    .header {
        text-align: center;
        font-size: 30px;
        font-weight: 200;
    }
    .space-list-items {
        font-size: 14px;
        line-height: 22px;
    }
`;

export default Player;
