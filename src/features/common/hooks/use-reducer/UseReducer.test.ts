import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import TestUseReducer from "./TestUseReducer.vue";

describe("useReducer", () => {
  it("has correct default state", () => {
    render(TestUseReducer);
  });

  it("adjusts for increase correctly", async () => {
    const user = userEvent.setup();

    render(TestUseReducer);

    await user.click(screen.getByRole("button", { name: /increase/i }));

    await expect(screen.findByText(1)).resolves.toBeInTheDocument();
  });

  it("adjusts for decrease correctly", async () => {
    const user = userEvent.setup();

    render(TestUseReducer);

    await user.click(screen.getByRole("button", { name: /decrease/i }));

    await expect(screen.findByText(-1)).resolves.toBeInTheDocument();
  });

  it("adjusts for default correctly", async () => {
    const user = userEvent.setup();

    render(TestUseReducer);

    await user.click(screen.getByRole("button", { name: /increase/i }));

    await user.click(screen.getByRole("button", { name: /default/i }));

    await expect(screen.findByText(1)).resolves.toBeInTheDocument();
  });
});
