import { useEffect, useState, useCallback } from "react";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import "./App.css";

import type { Product } from "./product";
import { HomePage } from "./components/HomePage";
import { ProductDetail } from "./components/ProductDetail";
import gproducts from "./products.json"

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  let gsproducts: Product[] = gproducts;
  useEffect(() => {
    setProducts(gsproducts)
  }, []);

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
      search={search}
      onSetSearch={onSetSearch}
      />
      <Switch>
        <Route exact path="/">
          <HomePage
            products={products}
            search={search}
          />
        </Route>
        <Route path="/detail/:id">
          <ProductDetail products={products}  />
        </Route>

      </Switch>
    </div>
  );
}

export default App;

