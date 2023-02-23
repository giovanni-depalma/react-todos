import { withServiceRedux as withService } from "../components/todos/service/redux";
import { TodoListContainer } from "../components/todos/view/TodoListContainer";
import { Provider } from 'react-redux'
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { todoApi } from "../components/todos/service/redux/todoApi";

export const store = configureStore({
  reducer: {
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const TodoRedux = withService(TodoListContainer);

export const TodoReduxRoute = () => 
    <Provider store={store}>
        <TodoRedux />
    </Provider>
