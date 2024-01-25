import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    background-color: #ffffff;
    padding: 20px 20px;

    @media (max-width: 767px) {
        flex-wrap: wrap;
    }
`;

export const Input = styled.input`
    flex-grow: 1;
    padding: 10px 10px;
    margin: 0 20px;
    border-style: solid;
    border-color: #dddddd;

    @media (max-width: 767px) {
        flex-basis: 100%;
        margin: 5px 20px;
    }
`;

export const AddButton = styled.button`
    flex-basis: 200px;
    background-color: hsl(180, 100%, 25%);
    color: white;
    padding: 10px 10px;
    margin: 0 20px;
    border: none;
    cursor: pointer;
    transition: 1s;

    &:hover {
        background-color: hsl(180, 100%, 30%);
        transform: scale(1.2);
    }

    &:active {
        background-color: hsl(180, 100%, 35%);
    }

    @media (max-width: 767px) {
        flex-basis: 100%;
        margin: 5px 20px;

        &:hover {
            transform: scaleY(1.2);
        }
    }
`;