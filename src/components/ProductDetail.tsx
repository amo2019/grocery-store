import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../product";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { DeleteProduct } from "../feature/productSlice";
import { toggleSaveButton } from "../feature/buttonSlice";
import { useHistory } from "react-router-dom";

export const ProductDetail: React.FunctionComponent<{
    products: Product[];
    onAddToCart: (product: Product) => void;
}> = ({ products, onAddToCart}) => {
    const { id } = useParams<{id: string; }>();
    const productsSelector = useSelector(
        (state: RootState) => state.products.item
      );

    const dispatch = useDispatch();
    const product = useMemo(
        () => (productsSelector ?? []).find((p) => p.id === parseInt(id)),
        [productsSelector, id]
    );

    const history = useHistory();
        const [isDisabled, setDisabled] = useState(false);
        
        const handleAddForm = () => {
          console.log('Your button was clicked and is now disabled');
          dispatch(toggleSaveButton(true));
            history.push({
                pathname: '/form',
                search: `?id=${id}`,
                state: {product} 
              })
        }

    return (
        <div className="p-10">
        {product && (
        <>
            <h3 className="title font-bold text-3xl truncate w-full max-w-full mb-2">
            {product.title}
            </h3>
            <div className="grid grid-cols-2 gap-10">
            <div className="w-full flex justify-center">
                <img
                src={product.image}
                alt={product.title}
                className="text-center"
                />
            </div>
            <div className="flex-cart">
                <div>
                <div className="text-lg overflow-ellipsis description">
                    {product.description}
                </div>
                <div className="flex flex-row mt-2">
                    <div className="text-md mt-1">{product.category}</div>
            <div className="text-2xl text-right flex-grow justify-end mt-1 mr-4">
                {product?.price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
                    })}
            </div>
                    <button
                    data-testid="detail-btn"
                    onClick={(evt) => {
                        evt.preventDefault();
                        onAddToCart(product);
                    }}
                    className="btn"
                    >
                    <i className="fas fa-cart-plus mr-2"></i>
                    Add To Cart
                    </button>
                </div>
                <div className="flex-container"> 
                <button  onClick={() => {
                    dispatch(
                        DeleteProduct({...product, id: product.id})
                    );
                    history.push("/");
                    }} className="btn">Delete</button>
                <button disabled={isDisabled}
                    onClick={handleAddForm} className="btn" type="submit" >Edit</button>
                </div>
                </div>
            </div>
            </div>
        </>
        )}
    </div>
    );
};
