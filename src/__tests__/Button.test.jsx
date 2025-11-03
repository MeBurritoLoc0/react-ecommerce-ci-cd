import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../components/Button";

test("renders label and triggers onClick", async () => {
  const user = userEvent.setup();
  const onClick = jest.fn();
  render(<Button onClick={onClick}>Add</Button>);

  const btn = screen.getByRole("button", { name: /add/i });
  expect(btn).toBeInTheDocument();

  await user.click(btn);
  expect(onClick).toHaveBeenCalledTimes(1);
});
