import React, { useMemo, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import type { Product } from "../product";
import { Button } from '../util/Button';


import {
    HeaderContainer,
    NotificationsSpan,
    SearchContainer,
    FlexDiv,
    TooltipDiv,
    TooltipSpan,
    Input,
    Title,
    Img,
    InnerDiv,
    Div,
    I
  } from './Header.styles';

export const Header: React.FunctionComponent<{
    cart: Product[];
    onClearCart: () => void;
    search: string;
    onSetSearch: (search: string) => void;
}> = ({ cart, onClearCart, search, onSetSearch }) => {
    const total = useMemo(
    () => (cart ? cart.reduce((total, p) => total + Number(p.price), 0) : 0),
    [cart]
    );
  

  const inputRef = useRef<any>(null);
      useEffect(() => {
        inputRef.current.focus();
      }, [])

  let uuid = () => {
    return (`[1e7]+-1e3+-4e3+-8e3+-1e11`).replace(/[018]/g, (c: any) =>
      (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & 15) >> c / 4).toString(16)
    );
  }

  const CartButton = Button({padding: ".6em 1em", size:".8em"})


  const itemCount: number = (cart ?? []).length;
  
return (
    <HeaderContainer>
    <SearchContainer onClick={()=>onSetSearch("")}>
        <Link to="/" data-testid="header">
        <I className="fas fa-shopping-basket"></I>
        Grocery Store
        </Link>
    </SearchContainer>
    <FlexDiv>
    <Div>
        <Input
        ref={inputRef as any}
        type="text"
        placeholder="Search.."
        value={search}
        onChange={(evt) => onSetSearch(evt.target.value)}
        
        />
    </Div>
    <TooltipDiv>
        <TooltipSpan>
        <div>Cart ({(cart ?? []).length})</div>
        {cart?.map((product, index) => (
        <InnerDiv key={uuid()}>
            <Img src={product.image} alt={product.title}/>
            <Title>{product.title}</Title>
            <div>
                {product.price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
                })}
            </div>
        </InnerDiv>
        ))}
        <FlexDiv>
            <CartButton
            data-testid="shopping-cart-btn"
            onClick={onClearCart}
            >
            Clear Cart
            </CartButton>
            <Div>
            {total.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
            })}
            </Div>
        </FlexDiv>
        </TooltipSpan>
        <div id="cart-total" data-testid="Cart">
        
        <NotificationsSpan data-testid="cart-total" >{itemCount}</NotificationsSpan>
        </div>
    </TooltipDiv>
    </FlexDiv>
    </HeaderContainer>
);
};