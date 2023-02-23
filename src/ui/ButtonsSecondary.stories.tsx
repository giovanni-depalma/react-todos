import { StoryFn, Meta } from "@storybook/react";
import { SecondaryButton } from "./Buttons";


export default {
  title: "ui/button/SecondaryButton",
  component: SecondaryButton,
} as Meta<typeof SecondaryButton>;

const Template: StoryFn<typeof SecondaryButton> = (args) => (
  <SecondaryButton {...args}>Button</SecondaryButton>
);

export const SimpleSecondaryButton = Template.bind({});
SimpleSecondaryButton.args = {

};

