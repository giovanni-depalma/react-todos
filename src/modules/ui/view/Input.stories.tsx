import { StoryFn, Meta } from "@storybook/react";
import { Input } from "./Input";


export default {
  title: "ui/Input",
  component: Input,
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => (
  <Input {...args} />
);

export const SimpleInput = Template.bind({});
SimpleInput.args = {
  placeholder: "insert your placeholder"
};

