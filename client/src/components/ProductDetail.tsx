import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../product";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { DeleteProduct } from "../feature/productSlice";
import { toggleSaveButton } from "../feature/buttonSlice";
import { useHistory } from "react-router-dom";
import { Button } from '../util/Button';

import {
    MainDiv,
    GridDiv,
    FlexContainer,
    FlexCart,
    FlexDiv,
    InnerFlexDiv,
    InnerDiv,
    Title,
    TextMDiv,
    Img,
    I
  } from './ProductDetail.styles';

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
        const [isDisabled] = useState(false);
        
        const handleAddForm = () => {
          dispatch(toggleSaveButton(true));
            history.push({
                pathname: '/form',
                search: `?id=${parseInt(id)}`,
                state: {product} 
              })
        }

        const PDButton = Button({padding:".7em 1.3em", size:"1.3em"})


    return (
        <MainDiv>
        {product && (
        <>
            <Title>
            {product.title}
            </Title>
            <GridDiv>
            <FlexDiv>
                <Img
                src={product.image}
                alt={product.title}
                />
            </FlexDiv>
            <FlexCart>
                <div>
                <TextMDiv>
                    {product.description}
                </TextMDiv>
                <InnerFlexDiv>
                    <div className="text-md mt-1">{product.category}</div>
            <InnerDiv>
                {product?.price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
                    })}
            </InnerDiv>
                    <PDButton
                    data-testid="detail-btn"
                    onClick={(evt) => {
                        evt.preventDefault();
                        onAddToCart(product);
                    }}
                    >
                    <I className="fas fa-cart-plus"></I>
                    Add To Cart
                    </PDButton>
                </InnerFlexDiv>
                <FlexContainer> 
                <PDButton  onClick={() => {
                    dispatch(
                        DeleteProduct({...product, id: product.id})
                    );
                    history.push("/");
                    }} className="btn">Delete</PDButton>
                <PDButton disabled={isDisabled}
                    onClick={handleAddForm} type="submit" >Edit</PDButton>
                </FlexContainer>
                </div>
            </FlexCart>
            </GridDiv>
        </>
        )}
    </MainDiv>
    );
};
