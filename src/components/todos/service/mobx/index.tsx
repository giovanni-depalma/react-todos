import { observer } from "mobx-react-lite"
import { Mobx } from "./mobx"
import { WithService } from "../../domain/withService";
import { useCallback, useMemo } from "react";

const mobx = new Mobx();


const useOnAddTodo = () => (todo: string) => mobx.addTodo(todo);
const useOnRemoveTodo = () => (id: number) => mobx.removeTodo(id);


export const withServiceMobx: WithService = (Component) => {
   return (props) => {
      const TodoServiceMobx = observer(()=> {
            const useTodos = useCallback( ()=>{
               if(!mobx.isDone && !mobx.isLoading)
                  mobx.getTodos();
               return {data: mobx.todos, isLoading: mobx.isLoading, error: mobx.error}
            }, [mobx.todos, mobx.isLoading, mobx.error, mobx.isDone]);
            const hooks = useMemo(()=> ({useTodos, useOnAddTodo, useOnRemoveTodo}), [useTodos, useOnAddTodo, useOnRemoveTodo]);
            return <Component {...props} hooks={hooks}/>
         }
      );
      return <TodoServiceMobx  />
   };
}

export default withServiceMobx;