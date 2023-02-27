import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { reduxTodoApi } from "./modules/todos";

export const store = configureStore({
    reducer: {
      [reduxTodoApi.reducerPath]: reduxTodoApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(reduxTodoApi.middleware),
  });
  
  // optional, but required for refetchOnFocus/refetchOnReconnect behaviors
  setupListeners(store.dispatch);
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  