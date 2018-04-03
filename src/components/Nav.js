import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => (
    <StyledNav>
        <li className="item">
            <NavLink activeClassName="active" exact to="/">
                Home
            </NavLink>
        </li>
        <li className="item">
            <NavLink activeClassName="active" to="/battle">
                Battle
            </NavLink>
        </li>
        <li className="item">
            <NavLink activeClassName="active" to="/popular">
                Popular
            </NavLink>
        </li>
    </StyledNav>
);

const StyledNav = styled.ul`
    display: flex;

    .item {
        margin-right: 15px;
    }
    .active {
        font-weight: bold;
    }

    a {
        text-decoration: none;
        color: #d0021b;
    }
`;

export default Nav;
