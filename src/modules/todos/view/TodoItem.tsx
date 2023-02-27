import { useCallback } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { DangerButton, PrimaryButton, SecondaryButton } from "../../ui";

export interface Props {
  title: string;
  id: number;
  completed: boolean;
  onRemoveTodo: (id: number) => void;
}

const StyledTitle = styled.p<{
  completed: boolean;
}>`
  ${tw`w-full`};
  ${({ completed }) => completed && tw`line-through text-green-500`}
`
const ItemContainer = tw.div`flex mb-4 items-center`

export const TodoItem = function ({
  title,
  completed,
  id,
  onRemoveTodo,
}: Props) {
  const onClickRemove = useCallback(() => onRemoveTodo(id), [id, onRemoveTodo]);
  return (
    <ItemContainer>
      <StyledTitle completed={completed}>{title}</StyledTitle>
          {completed ? <SecondaryButton>Not Done</SecondaryButton> : <PrimaryButton>Done</PrimaryButton>}
          <DangerButton onClick={onClickRemove}>Delete</DangerButton>
    </ItemContainer>
  );
};
