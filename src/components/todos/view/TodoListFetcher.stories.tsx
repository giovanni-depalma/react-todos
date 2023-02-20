import { StoryFn, Meta } from "@storybook/react";
import { TodoListFetcher } from "./TodoListFetcher";

export default {
  title: "Todos/TodoListFetcher",
  component: TodoListFetcher,
} as Meta<typeof TodoListFetcher>;

const Template: StoryFn<typeof TodoListFetcher> = (args) => (
  <TodoListFetcher {...args} />
);

export const TodoListFetcherLoading = Template.bind({});
TodoListFetcherLoading.args = {
  useGetTodos: () => ({ data: undefined, isLoading: true, error: false }),
};

export const TodoListFetcherError = Template.bind({});
TodoListFetcherError.args = {
  useGetTodos: () => ({ data: undefined, isLoading: false, error: true }),
};

export const TodoListFetcherData = Template.bind({});
TodoListFetcherData.args = {
  useGetTodos: () => ({
    data: [
      {
        id: 1,
        completed: true,
        title: "title1",
      },
    ],
    isLoading: false,
    error: false,
  }),
};
