import { useCallback, useMemo } from "react";
import { useAddTodoMutation, useDeleteTodoMutation, useGetTodosQuery } from "./todoApi"
import { WithService } from "../../domain/CrudTodosService";



const useTodos = () => {
   const result = useGetTodosQuery();
   return useMemo(() => ({data: result.currentData, isLoading: result.isLoading, error: result.isError}),[result]);
};
const useOnAddTodo = () => {
   const [addTodo,result] = useAddTodoMutation();
   return useCallback(async (todo: string) => {
      console.log("redux addTodo",result);
      const test = await addTodo(todo);
      console.log("result", test)
   },[addTodo,result]);
};
const useOnRemoveTodo = () => {
   const [removeTodo] = useDeleteTodoMutation();
   return useCallback(async (id: number) => {
      console.log("redux remove");
      const result = await removeTodo(id);
      console.log("result", result)
   },[removeTodo]);
};

export const withServiceRedux: WithService = (Component) =>
   (props) => {
      return <Component {...props} useOnAddTodo={useOnAddTodo} useOnRemoveTodo={useOnRemoveTodo} useTodos={useTodos} />
   };
