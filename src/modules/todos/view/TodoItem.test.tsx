import { render, cleanup } from '@testing-library/react';
import { expect, test, afterEach } from 'vitest'
import { composeStories } from '@storybook/testing-react';
import * as stories from './TodoItem.stories';

const {CompleteTodo, UncompleteTodo} = composeStories(stories);

afterEach(() => {
  cleanup();
});

test('Checks CompleteTodo', () => {
  const {getByText} = render(<CompleteTodo />);
  expect(getByText("test complete")).not.toBeNull();
});

test('Checks UncompleteTodo', () => {
  const {getByText} = render(<UncompleteTodo />);
  expect(getByText("test uncomplete")).not.toBeNull();
});