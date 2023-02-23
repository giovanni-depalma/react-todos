import { StoryFn, Meta } from "@storybook/react";
import { Spinner } from "./Spinner";


export default {
  title: "ui/Spinner",
  component: Spinner,
} as Meta<typeof Spinner>;

const Template: StoryFn<typeof Spinner> = (args) => (
  <Spinner {...args} />
);

export const SimpleSpinner = Template.bind({});
SimpleSpinner.args = {

};
