import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import pproducts from "../products.json"
import App from "../App"
import {createMemoryHistory} from 'history'
import {Router} from 'react-router-dom'

const history = createMemoryHistory()
history.push('/')
let onAddToCart
(function prepare(){
    const productTest = {"id": 1, "image": "https://m.media-amazon.com/images/I/41yhjs01H9L._AC_.jpg", "title": "Vine Tomatoes", "price": 1.2, "description": "Large Vine Tomatoes - 400g - by Mado's Food Hall", "category": "Fresh Vegetable"};
    let cart = [];
    onAddToCart = [...(cart ?? []), productTest]
})()


test('if add to cart button clicked, the cart account is updated', async () => {
const {getAllByRole, getByTestId} = render(
    <Router history={history}>
    <App products={pproducts}/>
    </Router>,
)
    //screen.debug()
    const headerEl = getByTestId("header")
    expect(headerEl.textContent).toBe("Simple Grocery Store");
    userEvent.click(getByTestId('btn-2'));
    expect(await screen.findByText(/cart \(1\)/i)).toBeInTheDocument();
    userEvent.click(getAllByRole('button', {  name: /Add To Cart/i, hidden: true})[2]);
    expect(await screen.findByText(/cart \(2\)/i)).toBeInTheDocument();
});