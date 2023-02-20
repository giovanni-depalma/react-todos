import { Todo } from '../domain/Todo';

export interface Props{
    title: string,
    completed: boolean
}

export const TodoItem = function({title, completed}: Props){
    return (
        <article>
            <h2>{title}</h2>
            <span>{completed? "OK" : "RUNNING"}</span>
        </article>
    )
}