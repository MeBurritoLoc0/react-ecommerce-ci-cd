import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductCard from "../components/ProductCard";

test("renders title and price; add button works", async () => {
  const user = userEvent.setup();
  const product = { id: 1, title: "Coffee Mug", price: 12.5, inStock: true };
  const onAdd = jest.fn();

  render(<ProductCard product={product} onAdd={onAdd} />);

  expect(screen.getByText(/coffee mug/i)).toBeInTheDocument();
  expect(screen.getByText("$12.50")).toBeInTheDocument();

  await user.click(screen.getByRole("button", { name: /add to cart/i }));
  expect(onAdd).toHaveBeenCalledWith(product);
});

test("disables button when out of stock", () => {
  const product = { id: 2, title: "Tea Cup", price: 8, inStock: false };
  const onAdd = jest.fn();

  render(<ProductCard product={product} onAdd={onAdd} />);
  expect(screen.getByRole("button", { name: /out of stock/i })).toBeDisabled();
});
