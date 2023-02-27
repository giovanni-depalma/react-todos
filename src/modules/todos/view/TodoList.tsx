import { Todo } from "../domain/Todo";
import { TodoItem } from "./TodoItem";
import tw from "twin.macro";

interface Props {
  items?: Todo[];
  onRemoveTodo: (id: number) => void;
}

const Container = tw.div``

export const TodoList = function ({ items = [], onRemoveTodo }: Props) {
  return (
      <Container>
        {items.map((item) => (
          <TodoItem key={item.id} {...item} onRemoveTodo={onRemoveTodo} />
        ))}
      </Container>
  );
};

