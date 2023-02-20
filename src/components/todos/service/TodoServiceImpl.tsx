import useSWR from 'swr'
import { Todo } from '../domain/Todo';
import { TodoService } from '../domain/TodoService';
const fetcher = (url:string) => fetch(url).then(r => r.json())

const useGetTodos = function(){
    const { data, error, isLoading } = useSWR<Todo[]>('https://jsonplaceholder.typicode.com/todos',fetcher);
    return { data, error, isLoading };
}

export const todoService: TodoService = { useGetTodos }