import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CartProvider } from "../cart/CartContext";
import HeaderCartCount from "../components/HeaderCartCount";
import ProductList from "../components/ProductList";

const renderWithCart = (ui) => render(<CartProvider>{ui}</CartProvider>);

test("adding a product increments cart count", async () => {
  const user = userEvent.setup();
  const products = [{ id: 1, title: "Coffee Mug" }];

  renderWithCart(
    <>
      <HeaderCartCount />
      <ProductList products={products} />
    </>
  );

  expect(screen.getByLabelText("cart-count")).toHaveTextContent("0");
  await user.click(screen.getByRole("button", { name: /add to cart/i }));
  expect(screen.getByLabelText("cart-count")).toHaveTextContent("1");
});
