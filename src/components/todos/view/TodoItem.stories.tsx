import { StoryFn, Meta } from '@storybook/react';
import { TodoItem } from './TodoItem';


export default {
  title: 'Todos/TodoItem',
  component: TodoItem,
  argTypes: {
    
  },
} as Meta<typeof TodoItem>;


const Template: StoryFn<typeof TodoItem> = (args) => <TodoItem {...args} />;

export const UncompleteTodo = Template.bind({});
UncompleteTodo.args = {
  "title": "test uncomplete", 
  completed: false
};

export const CompleteTodo = Template.bind({});
CompleteTodo.args = {
  "title": "test complete", 
  completed: true
};
