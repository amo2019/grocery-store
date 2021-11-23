import styled, {css, FlattenSimpleInterpolation, ThemedStyledProps, ThemeProps} from 'styled-components';
import { Link } from 'react-router-dom';
import type { Product } from "../product";
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { mobile } from "../responsive";

export const HeaderContainer = styled.div`
margin-top: 0.1rem;
margin-left: auto;
margin-right: auto;
margin-bottom: 1rem;
font-weight: bold;
text-decoration-line: none;
background-color: rgb(50, 53, 53);
display: flex;
flex-wrap: wrap;
min-width: 360px;
border-bottom: 2px solid rgb(70, 67, 67);
${mobile({ gridTemplateColumns: "repeat(1, minmax(0, 1fr))", flexGrow: "max(0,.5)", fontWeight:"bold", paddingTeft: "0rem", paddingTop: "1.5rem", fontSize: "0.8rem" })}
`;


const ItemCountContainer0 = css`
  color: #e5ff00;
`;

const ItemCountContainer1 = css`
  color: green;
`;
const getCountStyles = ( itemCount: any ): FlattenSimpleInterpolation => {
  return parseInt(itemCount.children) === 0 ? ItemCountContainer0 : ItemCountContainer1;
};



export const NotificationsSpan = styled.span`
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
    margin-top: 1rem;
    border: 6px rgb(235, 219, 50) solid;
    border-radius: 50%;
    background-color: #212724;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    ${getCountStyles}

`;


export const Title = styled.h3`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex-grow: max(0.8);      
      
`;


export const I = styled.i`

  margin-right: .6rem;

`;

    

export const SearchContainer = styled.div`
    font-size: 1.6rem;
    line-height: 2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
`;

export const FlexGrowDiv = styled.div`
  flex-grow: max(0.8);
`;

export const TooltipSpan = styled.span`
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        justify-content: flex-end;
        visibility: hidden;
        position: absolute;
        font-size: medium;
        width: 20rem;
        margin-top: 2.4rem;
        margin-left: -19rem;
        background: rgb(77, 120, 95);
        padding: 0.5rem;
        color: rgb(51, 48, 48);
        border: 1px solid black;
`;

export const TooltipDiv = styled.div`
        background-image: initial;
        background-color: gb(107, 160, 119);
        color: rgb(232, 230, 227);
        border-color: rgb(212, 201, 184);
        font-size: medium;
        margin-right: 1.6rem;
        
        &:hover ${TooltipSpan}{
          z-index: 10;
          visibility: visible;
          img{
            width: 18%;
            height: 18%;
        }
        }
        .cart-icon {
          font-size: 1.3rem;
          margin-top: .1rem;
          img{
            width: 18%;
            height: 18%;
        }
      }

`;




export const Cart = styled.div`
        background-image: initial;
        background-color: gb(107, 160, 119);
        color: rgb(232, 230, 227);
        border-color: rgb(212, 201, 184);
        font-size: medium;
`;



export const FlexDiv = styled.div`
    display: flex;
    align-items: baseline;
    margin-top: auto;
    flex-flow: wrap;
    flex-direction: row;
    margin-top: auto;
    flex-grow: 1;
    `;

    export const CartIcon = styled.div`
            font-size: 1.3rem;
            margin-top: .1rem;
    `;
        
    export const InnerDiv = styled.div`
    display: flex;
    align-items: baseline;
    margin-top: auto;
    flex-flow: wrap;
    flex-direction: row;
    margin-top: auto;
`;

export const Div = styled.div`
    font-weight: bold;
    flex-grow: max(0.8);
    margin-left: auto;
    justify-content: flex-end;
    font-size: 1.2rem;
`;


export const Input = styled.input`
      padding: .5rem;
      margin-left: 1rem;
      margin-top: .5rem;
      margin-bottom: .5rem;
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
      min-width: 40%;
      border-radius: 10px;
`;

export const Img = styled.img`
    margin-right: 0.5rem;
    max-width: 30%;
    height: 322px;
    display: flex;
    vertical-align: middle;
    height: 2rem;
`;