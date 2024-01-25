import styled from "styled-components";

export const StyledSection = styled.section`
    margin: 10px 0;
`;

export const Header = styled.div`
    display: flex;
    flex-grow: 1;
    background-color: #ffffff;
    padding: 0 20px;
    margin-bottom: 2px;

    @media (max-width: 767px) {
        flex-direction: column;
    }
`;

export const Title = styled.h2`
    flex-grow: 1;
`;