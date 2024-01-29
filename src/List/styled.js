import styled, { css } from "styled-components";

export const StyledList = styled.ul`
    background-color: #ffffff;
    padding: 30px 20px;
    margin: 0 0 10px;
`;

export const TaskBlock = styled.li`
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    background-color: #ffffff;
    padding: 10px 20px;
    border-style: solid;
    border-width: 0 0 1px;
    border-color: #dddddd;
    justify-content: space-between;
    align-items: center;

    ${({ hidden }) => hidden && css`
    display: none;
    `}
`;

export const TaskItem = styled.div`
    flex-grow: 1;
`;

export const TaskMark = styled.span`
    display: flex;
    justify-content: flex-start;
`;

export const TaskContent = styled.span`
    display: flex;
    word-break: break-word;
    margin: 0 10px;

    ${({ done }) => done && css`
    text-decoration: line-through;
    `}
`;

export const TaskBin = styled.span`
    display: flex;
    justify-content: flex-end;
`;

export const MarkButton = styled.button`
    width: 30px;
    height: 30px;
    background-color: hsl(120, 100%, 30%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: white;
    cursor: pointer;
    transition: 0.2s;
    border: none;

    &:hover {
        background-color: hsl(120, 100%, 35%);
    }

    &:active {
        background-color: hsl(120, 100%, 40%);
    }
`;

export const BinButton = styled.button`
    width: 30px;
    height: 30px;
    background-color: hsl(0, 100%, 45%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    cursor: pointer;
    flex-shrink: 0;
    transition: 0.2s;
    border: none;

    &:hover {
        background-color: hsl(0, 100%, 55%);
    }

    &:active {
        background-color: hsl(0, 100%, 65%);
    }
`;