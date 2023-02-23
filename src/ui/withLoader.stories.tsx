import { StoryFn, Meta } from "@storybook/react";
import { withLoader } from "./withLoader";

const ComponentWithLoader = withLoader(({text}: {text: string}) => <div>{text}</div>)

export default {
  title: "ui/withLoader",
  component: ComponentWithLoader,
} as Meta<typeof ComponentWithLoader>;

const Template: StoryFn<typeof ComponentWithLoader> = (args) => (
  <ComponentWithLoader {...args} />
);

export const ComponentWithLoaderLoading = Template.bind({});
ComponentWithLoaderLoading.args = {
  text: undefined,
  isLoading: true,
  error: false,
};

export const ComponentWithLoaderError = Template.bind({});
ComponentWithLoaderError.args = {
  text: undefined,
  isLoading: false,
  error: true,
};

export const ComponentWithLoaderData = Template.bind({});
ComponentWithLoaderData.args = {
  text: "Hello With Loader",
  isLoading: false,
  error: false,
};
