import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import type { Product } from "../product";
import "./HomePage.css";

export const HomePage: React.FunctionComponent<{
  products: Product[];
  onAddToCart: (product: Product) => void;
  search: string;
}> = ({ products, onAddToCart, search }) => {
  const filteredProducts = useMemo(
    () =>
      (products ?? []).filter(
        (product) =>
          product.title
            .includes(search) ||
          product.description
            .toLocaleLowerCase()
            .includes(search)
      ),
    [products, search]
  );

  return (
    <div className="grid-container">
      {filteredProducts.map((product) => (
        <Link
          to={`/detail/${product.id}`}
          key={product.id}
          className="flex-cart m-2 border border-1 border-green-600 rounded-t-lg bg-green-600"
        >
          <h3 className="title font-bold truncate w-full max-w-full py-2 px-4 text-white">
            {product.title}
          </h3>
          <div className="bg-white p-3">
            <div className="w-full flex justify-center">
              <img src={product.image} alt={product.title} data-testid={`img-${product.id}`}/>
            </div>
            <div className="bg-white p-3">
              <div className="w-full flex justify-center">
                {product.description}
              </div>
              <div className="flex-container">
                <div className="text-md mt-1">{product.category}</div>
                <div className="text-lg text-right flex-grow justify-end mt-1 mr-4 font-bold">
                  {product.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </div>
                <button
                data-testid={`btn-${product.id}`}
                  onClick={(evt) => {
                    evt.preventDefault();
                    onAddToCart(product);
                  }}
                  className="text-lg px-8 py-1 font-bold bg-green-800 text-white rounded-full"
                >
                  <i className="fas fa-cart-plus mr-2"></i>
                  Add To Cart
                </button>
              </div>
              </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
