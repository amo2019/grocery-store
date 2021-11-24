import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { ProductDetail } from "./components/ProductDetail";
import App from "./App";
import {createMemoryHistory} from 'history'
import {Router} from 'react-router-dom'


test('if add to cart button clicked, the cart account is updated', async () => {

  const history = createMemoryHistory()
  history.push('/')
  render(
    <Router history={history}>
      <App />
      {/* <ProductDetail products={pproducts} onAddToCart={onAddToCart}/> */}
    </Router>,
  )
  screen.findByRole("")

  const button = screen.getByTestId("btn-2")
  console.log("button:::", button)
  //userEvent.click(await screen.findByRole("button", {  name: /Add To Cart/i}));
  expect(await screen.findByText(/cart \(0\)/i)).toBeInTheDocument();
  userEvent.click(await screen.getByTestId("btn-2"));
    expect(await screen.findByText(/\(1\)/i)).toBeInTheDocument();
  userEvent.click(await screen.getByTestId("btn-2"));
    expect(await screen.findByText(/\(2\)/i)).toBeInTheDocument();
});