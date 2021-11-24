import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../product";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { DeleteProduct } from "../feature/productSlice";
import { toggleSaveButton } from "../feature/buttonSlice";
import { useHistory } from "react-router-dom";
//import { Button } from '../util/Button';

import {
    MainDiv,
    GridDiv,
    FlexContainer,
    FlexCart,
    FlexDiv,
    InnerFlexDiv,
    InnerDiv,
    Title,
    Button,
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
        () => (productsSelector ?? []).find((p) => p.id === id),
        [productsSelector, id]
    );

    const history = useHistory();
        const [isDisabled] = useState(false);
        
        const handleAddForm = () => {
          console.log('Your button was clicked and is now disabled');
          dispatch(toggleSaveButton(true));
            history.push({
                pathname: '/form',
                search: `?id=${id}`,
                state: {product} 
              })
        }

       // const PDButton = Button({padding:".7em 1.3em", size:"1.3em"})


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
                        <Button
                        data-testid="detail-btn"
                        onClick={(evt: any) => {
                            evt.preventDefault();
                            onAddToCart(product);
                        }}
                        >
                        <I className="fas fa-cart-plus"></I>
                        Add To Cart
                        </Button>
                    </InnerFlexDiv>
                    <FlexContainer> 
                    <Button  onClick={() => {
                        dispatch(
                            DeleteProduct({...product, id: product.id})
                        );
                        history.push("/");
                        }} className="btn">Delete</Button>
                    <Button disabled={isDisabled}
                        onClick={handleAddForm} type="submit" >Edit</Button>
                    </FlexContainer>
                    </div>
                </FlexCart>
                </GridDiv>
            </>
            )}
        </MainDiv>
        );
};
