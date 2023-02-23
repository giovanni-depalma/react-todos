import { useState } from "react";
import tw from "twin.macro";
import { PrimaryButton } from "../../../ui/Buttons";
import { Input } from "../../../ui/Input";

export interface Props {
  onAddTodo: (todo: string) => void;
}

const AddTodoContainer = tw.div`flex mt-4`;
export const AddTodoItem = ({ onAddTodo }: Props) => {
  const [todo, setTodo] = useState("");
  return (
    <AddTodoContainer>
      <Input
        placeholder="Add Todo"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <PrimaryButton onClick={() => onAddTodo(todo)}>Add</PrimaryButton>
    </AddTodoContainer>
  );
};
