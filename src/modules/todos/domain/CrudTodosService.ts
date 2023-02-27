import { ComponentType } from "react";
import { Todo } from "./Todo"

export interface LoaderResponse<T>{
    data: T | undefined,
    error: Error | boolean | undefined;
    isLoading: boolean;
}

export interface Hooks{
    useTodos: () => LoaderResponse<Todo[]>
    useOnAddTodo: () => (todo: string) => void
    useOnRemoveTodo: () => (id: number) => void
}

interface WithServicProps extends Hooks{
   
}

export type WithService = <P>(Component: ComponentType<P & WithServicProps>) => ComponentType<P>

