import { WithService } from "../../domain/CrudTodosService";
import { useComputed } from "@preact/signals-react";
import { addTodo, getTodos, removeTodo, isDone, isLoading, error, todos } from "./signal";


const useOnAddTodo = () => (todo: string) => addTodo(todo);
const useOnRemoveTodo = () => (id: number) => removeTodo(id);


export const withServiceSignals: WithService = (Component) => {
   return (props) => {
      const useTodos = useComputed(()=>()=>{
         if(!isDone.value && !isLoading.value){
            getTodos();
         }
         return {data: todos.value, isLoading: isLoading.value, error: error.value}
      });
      return <Component {...props} useOnAddTodo={useOnAddTodo} useOnRemoveTodo={useOnRemoveTodo} useTodos={useTodos.value} />
   };
}

export default withServiceSignals;