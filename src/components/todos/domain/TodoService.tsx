import { Todo } from "./Todo"

export interface FetchData<Type>{
    data: Type | undefined,
    isLoading: boolean,
    error: any
}

export interface TodoService{
    useGetTodos: ()=> FetchData<Todo[]>
}