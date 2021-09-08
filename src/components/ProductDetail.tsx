import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../product";

export const ProductDetail: React.FunctionComponent<{
    products: Product[];
}> = ({ products}) => {
    const { id } = useParams<{
        id: string;
}>();
    const product = useMemo(
        () => (products ?? []).find((p) => p.id === parseInt(id)),
        [products, id]
    );

    return (
    <>
    <div>{product?.category}</div>
    <div className="px-10">
        {product?.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
                    })}
    </div>
    </>
    );
};
