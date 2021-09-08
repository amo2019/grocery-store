import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import type { Product } from "../product";
import "./HomePage.css";

export const HomePage: React.FunctionComponent<{
  products: Product[];
}> = ({ products }) => {

  return (
    <div className="grid-container">
      {products.map((product) => (
        <Link
          to={`/detail/${product.id}`}
          key={product.id}
        >
          <h3 >
            {product.title}
          </h3>
          <div >
            <div >
              <img src={product.image} alt={product.title}/>
            </div>
            <div>
              <div >
                {product.description}
              </div>
              <div className="flex-container">
                <div >{product.category}</div>
                <div className="flex-grow justify-end">
                  {product.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </div>
                
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
