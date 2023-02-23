import { StoryFn, Meta } from "@storybook/react";
import { DangerButton } from "./Buttons";


export default {
  title: "ui/button/DangerButton",
  component: DangerButton,
} as Meta<typeof DangerButton>;

const Template: StoryFn<typeof DangerButton> = (args) => (
  <DangerButton {...args}>Button</DangerButton>
);

export const SimpleDangerButton = Template.bind({});
SimpleDangerButton.args = {

};

