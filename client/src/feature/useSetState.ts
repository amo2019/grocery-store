import { useState, useEffect } from 'react';
import type { Product } from "../product";
import { getProducts } from "../lib/api";


export let result: Product[] = [];
(async()=>{
    result = await getProducts()
})()
  

function useSetState() {
    // call useState, "reserve piece of state"
    const [productsResult, setResult] = useState<Product[]>([])
    const setProductsResult = async(data: Product[]) => {
        result = await getProducts()
        setResult(result);
    };
    // return piece of state AND a function to change it
    return [productsResult, setProductsResult];
  }
  export default useSetState;

