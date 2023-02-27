import { useState } from "react";
import tw from "twin.macro";
import { Input, PrimaryButton } from "../../ui/";

export interface Props {
  onAddTodo: (todo: string) => void;
}

const Container = tw.div`flex mt-4`;
export const AddTodoItem = ({ onAddTodo }: Props) => {
  const [todo, setTodo] = useState("");
  return (
    <Container>
      <Input
        placeholder="Add Todo"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <PrimaryButton onClick={() => onAddTodo(todo)}>Add</PrimaryButton>
    </Container>
  );
};
