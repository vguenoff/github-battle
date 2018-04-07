import styled from 'styled-components';

const Button = styled.button`
    cursor: pointer;
    color: #e6e6e6;
    background: #0a0a0a;
    border: none;
    font-size: 16px;
    border-radius: 3px;
    width: 200px;
    text-align: center;
    display: block;
    padding: 7px 0;
    margin: 10px auto;
    &:hover:enabled {
        background: linear-gradient(#1a1a1a, #0a0a0a);
        color: #fff;
        text-decoration: none;
    }
    &:active {
        transform: translateY(1px);
    }
`;

export default Button;
