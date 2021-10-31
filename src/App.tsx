import { useEffect, useState, useCallback } from "react";
import { useLocalStorage } from "react-use";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";

import "./App.css";

import type { Product } from "./product";
import { HomePage } from "./components/HomePage";
import { ProductDetail } from "./components/ProductDetail";
import { Header } from "./components/Header";
import gproducts from "./products.json"

function App() {
  const [cart, setCart] = useLocalStorage<Product[]>("cart", []);
  const [products, setProducts] = useState<Product[]>([]);
  let gsproducts: Product[] = gproducts;
  console.log("gproducts: ", gproducts)
  const onAddToCart = useCallback(
    (product: Product) => {
      setCart([...(cart ?? []), product]);
    },
    [cart, setCart]
  );
  const onClearCart = useCallback(() => {
    setCart([]);
  }, [setCart]);
  //const setDefaultPruducts = (gsproducts)=>setProducts(gsproducts)
  useEffect(() => {
    setProducts(gsproducts)
  }, [gsproducts]);

  const history = useHistory();
  const location = useLocation();
  const [search, setSearch] = useState("");
  const onSetSearch = useCallback(
    (search: string) => {
      setSearch(search);
      if (location.pathname !== "/") {
        history.push("/");
      }
    },
    [setSearch, history, location]
  );

  return (
    <div>
      <Header
      cart={cart ?? []}
      onClearCart={onClearCart}
      search={search}
      onSetSearch={onSetSearch}
      />
      <Switch>
        <Route exact path="/">
          <HomePage
            products={products}
            onAddToCart={onAddToCart}
            search={search}
          />
        </Route>
        <Route path="/detail/:id">
          <ProductDetail products={products} onAddToCart={onAddToCart}  />
        </Route>

      </Switch>
    </div>
  );
}

export default App;

