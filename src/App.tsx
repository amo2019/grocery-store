import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
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

  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/">
          <HomePage
            products={products}
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

