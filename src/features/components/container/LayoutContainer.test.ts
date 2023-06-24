import { render, screen } from "@testing-library/vue";
import TestContainer from "./TestContainer.vue";

describe("layoutContainer", () => {
  it("renders", () => {
    render(TestContainer);

    expect(screen.getByText(/container content/i)).toBeInTheDocument();
  });
});
