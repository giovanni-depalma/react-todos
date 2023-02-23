import { withServiceMobx as withService } from "../components/todos/service/mobx";
import { TodoListContainer } from "../components/todos/view/TodoListContainer";


export const TodoMobxRoute = withService(TodoListContainer);