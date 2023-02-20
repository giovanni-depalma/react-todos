import { Todo } from '../../domain/Todo';
import { TodoItem } from './TodoItem';

interface Props{
    items: Todo[]
}

export const TodoList = function({items}: Props){
    return (
        <article>
            <h1>TodoList</h1>
            {items.map(item => (
                <TodoItem {...item} />
            ))}
        </article>
    )
}