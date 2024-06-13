import type { Meta } from "@storybook/react";

const meta: Meta = {
  title: "UI Components/Button",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `Custom Buttons for actions in forms, dialogs, and more with support for multiple sizes, states, and more.`,
      },
    },
  },
};

export default meta;

export { default as Primary } from "./template/button";
