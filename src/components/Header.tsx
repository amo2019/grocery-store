import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import type { Product } from "../product";
import "./Header.css";

export const Header: React.FunctionComponent<{
    cart: Product[];
    onClearCart: () => void;
    search: string;
    onSetSearch: (search: string) => void;
}> = ({ cart, onClearCart, search, onSetSearch }) => {
    const total = useMemo(
    () => (cart ? cart.reduce((total, p) => total + p.price, 0) : 0),
    [cart]
    );

return (
    <div className="header">
    <div className="text-2xl px-10 py-2">
        <Link to="/" data-testid="header">
        <i className="fas fa-shopping-basket mr-2"></i>
        Simple Grocery Store
        </Link>
    </div>
    <div className="flex-grow">
        <input
        type="text"
        placeholder="Search.."
        value={search}
        onChange={(evt) => onSetSearch(evt.target.value)}
        className="input p-2 text-xl  rounded-lg max-w-md w-96"
        />
    </div>

    <div className="px-10 py-2 justify-end has-tooltip cart-icon ">
        <span className="tooltip cart">
        <div>Cart ({(cart ?? []).length})</div>
        {cart?.map((product, index) => (
        <div key={`${product.id}${index}`} className="flex flex-row my-2">
            <img src={product.image} alt={product.title} className="h-8 mr-2" />
            <h3 className="title text-md truncate flex-grow">{product.title}</h3>
            <div className="text-md text-right flex-grow justify-end ml-2">
                {product.price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
                })}
            </div>
            </div>
        ))}
        <div className="flex">
            <button
            data-testid="shopping-cart-btn"
            onClick={onClearCart}
            className="text-md px-8 py-1 font-bold bg-green-800 text-white rounded-full"
            >
            Clear Cart
            </button>
            <div className="text-md text-right flex-grow justify-end ml-2">
            {total.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
            })}
            </div>
        </div>
        </span>
        <div id="cart-total" className="hint" data-testid="Cart">
        
        <span data-testid="cart-total" className="notifications" >{(cart ?? []).length}</span>
        </div>
    </div>
    </div>
);
};