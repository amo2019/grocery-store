import React, { HTMLAttributes, StyleHTMLAttributes } from "react";
import styled from 'styled-components';

export const Button = ({padding, size}: any) => {
    return styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1em auto;
    padding: ${ padding};
    font-size: ${ size};
    border-radius: 10px;
    &:hover{
        background-color: rgb(56, 54, 54);
        color: yellow;
        cursor: pointer;
}
`;
}
