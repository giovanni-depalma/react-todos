import { StoryFn, Meta } from '@storybook/react';
import { TodoList } from './TodoList';


export default {
  title: 'Todos/TodoList',
  component: TodoList
} as Meta<typeof TodoList>;


const Template: StoryFn<typeof TodoList> = (args) => <TodoList {...args} />;

export const Todos = Template.bind({});
Todos.args = {
  items: [
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
  ]
}

export const TodosEmpty = Template.bind({});
TodosEmpty.args = {
  items: []
}