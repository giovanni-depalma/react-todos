import { withServiceUseSwr as withService } from "../components/todos/service/useSwr";
import { TodoListContainer } from "../components/todos/view/TodoListContainer";


export const TodoUseSwrRoute = withService(TodoListContainer);