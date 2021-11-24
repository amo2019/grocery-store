import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GridContainer = styled.div`
        border-width: 0;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
            grid-gap: 1rem;
            align-content:space-between;
            justify-content: space-around;
            img {
                max-width: 60%;
                height: 322px;
                display: flex;
                vertical-align: middle;
                max-height: 60%;
            }
        `;

export const FlexContainer = styled.div`
            display: flex;
            align-content: center;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            margin-top: 1rem;
        `;

export const TextMDiv = styled.div`
            font-size: 1rem;
            line-height: 1rem;
            margin-top: 0.25rem;
    `;

export const BigWhiteDiv = styled.div`
            --darkreader-bg--tw-bg-opacity: 1;
            background-color: var(--cart-background);
            padding: 0.75rem;
        `;

export const LinkTag = styled(Link)`
            display: flex;
            flex-direction: column;
            align-content: center;
            justify-content: space-between;
            --darkreader-border--tw-border-opacity: 1;
            border-color: rgb(225, 235, 227);
            border-width: 1px;
            --tw-bg-opacity: 1;
            background-color:var(--cart-background);
            border-top-left-radius: 0.5rem;
            border-top-right-radius: 0.5rem;
            `;

        export const NotificationsSpan = styled.span`
            width: 2rem;
            height: 2rem;
            border: 6px rgb(235, 219, 50) solid;
            border-radius: 50%;
            background-color: #212724;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        
`;


export const Title = styled.h3`
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex-grow: max(0.8);    
    margin-top: 1rem;  
    margin-left: 1rem; 

`;


export const I = styled.i`
    margin-right: 0.5rem;
`;

    

export const InnerDiv = styled.div`
    font-size: 1.125rem;
    line-height: 1.75rem;
    text-align: right;
    flex-grow: max(0.8);
    justify-content: flex-end;
    font-weight: 700;
    margin-right: 1rem;
    margin-top: 0.25rem;
`;

export const FlexDiv = styled.div`
    justify-content: center;
    display: flex;
    align-items: baseline;
    margin-top: auto;
    flex-flow: wrap;
    width: 100%;
`;

export const Fab = styled.div`
    /* background: url(./plus-4.svg); */
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/179202/plus.svg);
    background-repeat: no-repeat;
    background-color: hsl(159, 55%, 77%);
    background-position: center center;
    background-size: 50% 50%;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    box-shadow: 2px 2px 8px hsl(0, 0%, 18%);
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    display: inline-block;
    font-style: normal;
    font-feature-settings: normal;
    font-variant: normal;
    text-rendering: auto;
    line-height: 1;
    &:hover{
        background-color: hsl(161, 50%, 60%);
        cursor: pointer;
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1em auto;
    padding: .8em 1.5em;
    font-size: 1.5em;
    border-radius: 10px;
    &:hover{
        background-color: rgb(56, 54, 54);
        color: yellow;
        cursor: pointer;
}
`;