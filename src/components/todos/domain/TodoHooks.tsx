import { Todo } from "./Todo"

export interface LoaderResponse<T>{
    data: T | undefined,
    error: Error | boolean | undefined;
    isLoading: boolean;
}

export interface TodoHooks{
    useTodos: () => LoaderResponse<Todo[]>
    useOnAddTodo: () => (todo: string) => void
    useOnRemoveTodo: () => (id: number) => void
}