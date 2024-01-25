import styled from "styled-components";

export const ButtonsContainer = styled.div`
    display: flex;

    @media (max-width: 767px) {
        flex-direction: column;
    }
`;

export const Button = styled.button`
    padding: 10px 30px;
    background: #ffffff;
    border: none;
    outline: none;
    color: hsl(180, 100%, 25%);
    cursor: pointer;
    height: 100%;
    transition: 0.2s;

    &:hover {
        color: hsl(180, 100%, 30%);
    }

    &:active {
        color: hsl(180, 100%, 35%);
        border: 2px solid;
    }

    &:disabled {
        color: hsl(0, 0%, 80%);
        cursor: not-allowed;
    }
`;