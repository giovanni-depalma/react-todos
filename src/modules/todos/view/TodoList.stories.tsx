import { StoryFn, Meta } from '@storybook/react';
import { TodoList } from './TodoList';


export default {
  title: 'Todos/TodoList',
  component: TodoList
} as Meta<typeof TodoList>;


const Template: StoryFn<typeof TodoList> = (args) => <TodoList {...args} />;

export const TodoListData = Template.bind({});
TodoListData.args = {
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

export const TodoListEmpty = Template.bind({});
TodoListEmpty.args = {
  items: []
}