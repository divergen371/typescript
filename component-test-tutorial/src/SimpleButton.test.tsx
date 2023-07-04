import { render, screen } from "@testing-library/react";
import { SimpleButton } from "./SimpleButton";
import userEvent from "@testing-library/user-event";

test("ボタンをクリックするとON/OFFが切り替わる", async () => {
  const user = userEvent.setup();
  render(<SimpleButton />);
  const simpleButton = screen.getByRole("button");
  expect(simpleButton).toHaveTextContent("OFF");
  await user.click(simpleButton);
  expect(simpleButton).toHaveTextContent("ON");
});
