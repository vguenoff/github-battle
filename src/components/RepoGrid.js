import React from 'react';
import { array } from 'prop-types';
import styled from 'styled-components';

const RepoGrid = ({ repos }) => (
    <StyledRepoGrid>
        {repos.map((repo, i) => (
            <li key={repo.name} className="item">
                <div className="rank">#{i + 1}</div>
                <ul className="space-items">
                    <li>
                        <img
                            className="avatar"
                            src={repo.owner.avatar_url}
                            alt={`Avatar for ${repo.owner.login}`}
                        />
                    </li>
                    <li>
                        <a href={repo.html_url} target="_blank">
                            {repo.name}
                        </a>
                    </li>
                    <li>@{repo.owner.login}</li>
                    <li>{repo.stargazers_count} stars</li>
                </ul>
            </li>
        ))}
    </StyledRepoGrid>
);

RepoGrid.propTypes = {
    repos: array.isRequired,
};

const StyledRepoGrid = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .item {
        margin: 20px;
        text-align: center;
    }

    .rank {
        font-size: 20px;
        margin: 10px;
    }

    .space-items {
        margin-bottom: 7px;
    }

    .avatar {
        width: 150px;
        border-radius: 50%;
    }
`;

export default RepoGrid;
