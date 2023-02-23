import React, { useCallback, useMemo } from "react";
import { useAddTodoMutation, useDeleteTodoMutation, useGetTodosQuery } from "./todoApi"
import { WithService } from "../../domain/withService";
import { TodoHooks } from "../../domain/TodoHooks";



const useTodos = () => {
   const result = useGetTodosQuery();
   return useMemo(() => ({data: result.currentData, isLoading: result.isLoading, error: result.isError}),[result]);
};
const useOnAddTodo = () => {
   const [addTodo] = useAddTodoMutation();
   return useCallback((todo: string) => {
      console.log("redux addTodo");
      addTodo(todo);
   },[addTodo]);
};
const useOnRemoveTodo = () => {
   const [removeTodo] = useDeleteTodoMutation();
   return useCallback((id: number) => {
      console.log("redux remove");
      removeTodo(id);
   },[removeTodo]);
};
const hooks:TodoHooks = {useTodos, useOnAddTodo, useOnRemoveTodo}

 
export const withServiceRedux: WithService = (Component) =>
   (props) => {
      return <Component {...props} hooks={hooks}/>
   };
