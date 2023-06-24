import type { Meta, StoryObj } from "@storybook/vue3";
import LayoutContainer from "./LayoutContainer.vue";
import TestContainer from "./TestContainer.vue";

const meta: Meta<typeof LayoutContainer> = {
  component: TestContainer,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof LayoutContainer> = {};
