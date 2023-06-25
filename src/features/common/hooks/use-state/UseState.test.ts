import { render, screen } from "@testing-library/vue";
import TestUseState from "./TestUseState.vue";
import userEvent from "@testing-library/user-event";

describe("useState", () => {
  it("has correct default state", () => {
    render(TestUseState);

    expect(screen.getByText(0)).toBeInTheDocument();
  });

  it("updates state correctly", async () => {
    const user = userEvent.setup();

    render(TestUseState);

    await user.click(screen.getByRole("button", { name: /increase/i }));

    await expect(screen.findByText(1)).resolves.toBeInTheDocument();
  });
});
