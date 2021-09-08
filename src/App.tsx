import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import type { Product } from "./product";
import { HomePage } from "./components/HomePage";
import gproducts from "./products.json"

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  let gsproducts: Product[] = gproducts;
  useEffect(() => {
    setProducts(gsproducts)
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage
            products={products}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

