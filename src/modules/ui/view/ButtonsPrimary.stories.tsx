import { StoryFn, Meta } from "@storybook/react";
import { PrimaryButton } from "./Buttons";


export default {
  title: "ui/button/PrimaryButton",
  component: PrimaryButton,
} as Meta<typeof PrimaryButton>;

const Template: StoryFn<typeof PrimaryButton> = (args) => (
  <PrimaryButton {...args}>Button</PrimaryButton>
);

export const SimplePrimaryButton = Template.bind({});
SimplePrimaryButton.args = {

};

