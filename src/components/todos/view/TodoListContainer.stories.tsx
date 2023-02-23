import { StoryFn, Meta } from "@storybook/react";
import { TodoListContainer } from "./TodoListContainer";

export default {
  title: "Todos/TodoListContainer",
  component: TodoListContainer,
} as Meta<typeof TodoListContainer>;

const Template: StoryFn<typeof TodoListContainer> = (args) => (
  <TodoListContainer {...args} />
);

export const TodoListContainerLoading = Template.bind({});
TodoListContainerLoading.args = {
  hooks: {
    useOnAddTodo: () => (todo:string) => {},
    useOnRemoveTodo: () => (id:number) => {},
    useTodos:  () => {return {data: undefined, isLoading: true, error: undefined}}
  }
};

export const TodoListContainerError = Template.bind({});
TodoListContainerError.args = {
  hooks: {
    useOnAddTodo: () => (todo:string) => {},
    useOnRemoveTodo: () => (id:number) => {},
    useTodos:  () => {return {data: undefined, isLoading: false, error: new Error("error")}}
  }
};



export const TodoListContainerData = Template.bind({});
TodoListContainerData.args = {
  hooks: {
    useOnAddTodo: () => (todo:string) => {},
    useOnRemoveTodo: () => (id:number) => {},
    useTodos:  () => ({data: [
      {
        id: 1, 
        completed: true,
        title: "title1"
      },
      {
        id: 2, 
        completed: false,
        title: "title2"
      }
    ], isLoading: false, error: undefined})
  }
};
