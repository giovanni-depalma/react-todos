import { TodoList } from "./TodoList";
import tw from "twin.macro";
import { AddTodoItem } from "./AddTodoItem";
import { TodoHooks } from "../domain/TodoHooks";
import { withLoader } from "../../../ui/withLoader";

const Container = tw.div`bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-3xl`
const TitleList = tw.h1`text-gray-900 text-2xl`
const Header = tw.div`mb-4`
const TodoListWithLoader = withLoader(TodoList);

interface Props {
  hooks: TodoHooks
}

export const TodoListContainer = ({hooks}: Props) => {
  const {useOnAddTodo, useOnRemoveTodo, useTodos} = hooks;
  const onAddTodo = useOnAddTodo();
  const onRemoveTodo = useOnRemoveTodo();
  const { data, error, isLoading } = useTodos();
  return (
    <Container>
      <Header>
            <TitleList>Todo List</TitleList>
            <AddTodoItem onAddTodo={onAddTodo}/>
      </Header>
      <TodoListWithLoader
        items={data}
        error={error}
        isLoading={isLoading}
        onRemoveTodo={onRemoveTodo}
      />
    </Container>  
  );
};

export default TodoListContainer;