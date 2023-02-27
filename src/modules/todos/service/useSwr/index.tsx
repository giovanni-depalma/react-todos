import { ComponentType, useCallback } from "react";
import useSWR, { useSWRConfig } from "swr";
import { Todo } from "../../domain/Todo";
import { LoaderResponse, WithService } from "../../domain/CrudTodosService";
import { TODOS_URL, fetcher, fetchAdd, fetchDelete } from "../../repository/todoRepository";

const useTodos = function ():LoaderResponse<Todo[]> {
  return useSWR<Todo[]>(TODOS_URL, fetcher);
};

const useOnAddTodo = function () {
  const { mutate } = useSWRConfig();
  return useCallback(async (todo: string)=>{
    console.log("add", todo);
    await fetchAdd(todo);
    mutate(TODOS_URL);
  },[mutate]);
};


const useOnRemoveTodo = function () {
  const { mutate } = useSWRConfig();
  return useCallback(async (id: number)=>{
    console.log("remove", id);
    await fetchDelete(id);
    mutate(TODOS_URL);
  },[mutate]);
};


export const withServiceUseSwr: WithService = (Component) => 
   (props) => {
    return <Component {...props} useOnAddTodo={useOnAddTodo} useOnRemoveTodo={useOnRemoveTodo} useTodos={useTodos} />
   };
