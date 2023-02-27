import { StoryFn, Meta } from "@storybook/react";
import { CrudTodos } from "./CrudTodos";

export default {
  title: "Todos/CrudTodos",
  component: CrudTodos,
} as Meta<typeof CrudTodos>;

const Template: StoryFn<typeof CrudTodos> = (args) => (
  <CrudTodos {...args} />
);

export const CrudTodosLoading = Template.bind({});
CrudTodosLoading.args = {
  useOnAddTodo: () => (todo:string) => {},
  useOnRemoveTodo: () => (id:number) => {},
  useTodos:  () => {return {data: undefined, isLoading: true, error: undefined}}
};

export const CrudTodosError = Template.bind({});
CrudTodosError.args = {
  useOnAddTodo: () => (todo:string) => {},
  useOnRemoveTodo: () => (id:number) => {},
  useTodos:  () => {return {data: undefined, isLoading: false, error: new Error("error")}}
};



export const CrudTodosData = Template.bind({});
CrudTodosData.args = {
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
};
