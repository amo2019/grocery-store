import { useEffect, useState, useCallback } from "react";
import { useLocalStorage } from "react-use";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { InjectProducts } from "./feature/productSlice";
import type { Product } from "./product";
import gproducts from "./products.json"
import { HomePage } from "./components/HomePage";
import { ProductDetail } from "./components/ProductDetail";
import { Header } from "./components/Header";
import  Form  from "./components/Form";
import { getProducts } from "./lib/api";
import { GlobalStyle } from './global.styles';


function App() {
  const [cart, setCart] = useLocalStorage<Product[]>("cart", []);
  const [products, setProducts] = useState<Product[]>([]);
  
  let result: Product[] = [];
  const dispatch = useDispatch();
  
  useEffect(()=>{
    const fetchData = async()=>{
      result = await getProducts()
      const seeds = result || gproducts;
      console.log("result:", result, gproducts, seeds)
      setProducts(seeds)
      dispatch(InjectProducts(seeds))

      return () => {
        setProducts([]); 
      };
  }
  fetchData()
  }, [])


  if(!products)  dispatch(InjectProducts(gproducts))
   
  const onAddToCart = useCallback(
    (product: Product) => {
      setCart([...(cart ?? []), product]);
    },
    [cart, setCart]
  );
  const onClearCart = useCallback(() => {
    setCart([]);
  }, [setCart]);

  useEffect(() => {
    onSetSearch('')
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
      <GlobalStyle />
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
        <Route path="/form">
          <Form />
        </Route>
        <Route path="/detail/:id">
          <ProductDetail products={products} onAddToCart={onAddToCart}  />
        </Route>

      </Switch>
    </div>
  );
}

export default App;

