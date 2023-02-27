import { observer } from "mobx-react-lite"
import { Mobx } from "./mobx"
import { WithService } from "../../domain/CrudTodosService";
import { useCallback, useMemo } from "react";

const mobx = new Mobx();


const useOnAddTodo = () => (todo: string) => mobx.addTodo(todo);
const useOnRemoveTodo = () => (id: number) => mobx.removeTodo(id);


export const withServiceMobx: WithService = (Component) => {
   return (props) => {
      const TodoServiceMobx = useMemo(()=> observer(()=> {
         const useTodos = useCallback( ()=>{
            if(!mobx.isDone && !mobx.isLoading)
               mobx.getTodos();
            return {data: mobx.todos, isLoading: mobx.isLoading, error: mobx.error}
         }, [mobx.todos, mobx.isLoading, mobx.error, mobx.isDone]);
         return <Component {...props} useOnAddTodo={useOnAddTodo} useOnRemoveTodo={useOnRemoveTodo} useTodos={useTodos} />
      }), []);
      return <TodoServiceMobx  />
   };
}

export default withServiceMobx;