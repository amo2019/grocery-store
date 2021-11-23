import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { toggleEditButton } from "../feature/buttonSlice";
import type { Product } from "../product";
import { RootState } from "../app/store";
import { Button } from '../util/Button';
 
import {
  GridContainer,
  FlexContainer,
  InnerDiv,
  FlexDiv,
  LinkTag,
  BigWhiteDiv,
  Title,
  TextMDiv,
  Fab,
  I
} from './HomePage.styles';

export const HomePage: React.FunctionComponent<{
  products: Product[];
  onAddToCart: (product: Product) => void;
  search: string;
}> = ({ products, onAddToCart, search }) => {
  const productsSelector = useSelector(
    (state: RootState) => state.products.item
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const filteredProducts = useMemo(
    () =>
      (productsSelector ?? []).filter(
        (product) =>
          product.title
            .includes(search) ||
          product.description
            .toLocaleLowerCase()
            .includes(search)
      ),
    [productsSelector, search]
  );

  const handleAddForm = () => {
    dispatch(toggleEditButton(true));
    history.push("/form")
  }

  let uuid = () => {
    return (`[1e7]+-1e3+-4e3+-8e3+-1e11`).replace(/[018]/g, (c: any) =>
      (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & 15) >> c / 4).toString(16)
    );
  }

  const HPButton = Button({padding:".8em 1.5em", size:"1.5em"})
  
  return (
    <GridContainer>
      {filteredProducts?.map((product) => (
        <LinkTag
          to={`/detail/${product.id}`}
          key={uuid()}
        >
          <Title>
            {product.title}
          </Title>
          <BigWhiteDiv>
            <FlexDiv>
              <img src={product.image} alt={product.title} data-testid={`img-${product.id}`} />
            </FlexDiv>
            <BigWhiteDiv>
              <FlexDiv>
                {product.description}
              </FlexDiv>
              <FlexContainer>
                <TextMDiv>{product.category}</TextMDiv>
                <InnerDiv>
                  {product?.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </InnerDiv>
                <HPButton
                  data-testid={`btn-${product.id}`}
                  onClick={(evt: any) => {
                    evt.preventDefault();
                    onAddToCart(product);
                  }}
                >
                  <I className="fas fa-cart-plus"></I>
                  Add To Cart
                </HPButton>
              </FlexContainer>
            </BigWhiteDiv>
          </BigWhiteDiv>
        </LinkTag>
      ))}
      <footer>
        <Fab onClick={handleAddForm}></Fab>
      </footer>
    </GridContainer>
  );
};