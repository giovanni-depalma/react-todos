
import { useGetTodos as _useGetTodos } from '../hook';
import { TodoList } from './TodoList';

interface Props{
    useGetTodos: typeof _useGetTodos
}

export const TodoListFetcher = function({useGetTodos=_useGetTodos}: Props){
    console.log(useGetTodos);
    const { data, error, isLoading } = useGetTodos();
    if(isLoading)
        return (
            <div>Loading</div>
        )
    if(data)
        return (
            <TodoList items={data}/>
        )
    else
        return null;
}