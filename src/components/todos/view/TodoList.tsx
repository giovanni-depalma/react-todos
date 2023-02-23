import { Todo } from "../domain/Todo";
import { TodoItem } from "./TodoItem";
import tw from "twin.macro";

interface Props {
  items?: Todo[];
  onRemoveTodo: (id: number) => void;
}

const TodosContainer = tw.div``

export const TodoList = function ({ items = [], onRemoveTodo }: Props) {
  return (
      <TodosContainer>
        {items.map((item) => (
          <TodoItem key={item.id} {...item} onRemoveTodo={onRemoveTodo} />
        ))}
      </TodosContainer>
  );
};

