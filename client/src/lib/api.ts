import type { Product } from "../product";
const BASE_URL = "http://localhost:8080/api/product";
export const getProducts = async (): Promise<Product[]> =>
  fetch(`${BASE_URL}s`).then((res) => res.json()).catch(function(error) {
    console.log(error);
});;
  let uuid = () => {
    return (crypto.getRandomValues(new Uint8Array(8))).toString().replace(/,/g, '').substr(1,16);
  
  }
export const createProduct = async (product: Product): Promise<Product> =>
  fetch(`${BASE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({...product, id: uuid()
    }),
  }).then((res) => res.json());

export const updateProduct = async (product: Product): Promise<Product> =>
  fetch(`${BASE_URL}/${product.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  }).then((res) => res.json());

export const deleteProduct = async (product: Product): Promise<Product> =>
  fetch(`${BASE_URL}/${product.id}`, {
    method: "DELETE",
  }).then(() => product);
