import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { TodoMobxRoute } from "./TodoMobxRoute";
import { TodoUseSwrRoute } from "./TodoUseSwrRoute";
import { TodoReduxRoute } from "./TodoReduxRoute";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <TodoUseSwrRoute />,
    },
    {
      path: "/mobx",
      element: <TodoMobxRoute />,
    },
    {
      path: "/useSwr",
      element: <TodoUseSwrRoute />,
    },
    {
      path: "/redux",
      element: <TodoReduxRoute />,
    },
  ]);