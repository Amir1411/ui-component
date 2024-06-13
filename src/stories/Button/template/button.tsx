import { Button } from "@/components/Button";
import { StoryFn } from "@storybook/react";

const ButtonComponent: StoryFn<typeof Button> = (args) => {
  return (
    <div>
      <Button {...args} />
    </div>
  );
};

ButtonComponent.args = {
  children: "Title",
  variant: "destructive"
};

ButtonComponent.argTypes = {
  children: {
    control: { type: "text" },
    description:
      "The content of the button.( It can be a string or a React.Node/Component )",
    table: {
      defaultValue: { summary: '' },
      type: { summary: "string | React.Node/Component" },
    },
  },
  variant: {
    control: { type: "select" },
    options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    description:
      "The variant of the button `filled`, `outlined`, `light`, `clear`",
    table: {
      defaultValue: { summary: "filled" },
      type: { summary: '' },
    },
  },
}

export default ButtonComponent;