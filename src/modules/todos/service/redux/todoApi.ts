import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  TODOS_URL
} from "../../repository/todoRepository";
import { Todo } from "../../domain/Todo";


export const todoApi = createApi({
  reducerPath: "todoApi",
  tagTypes: ["Todos"],
  baseQuery: fetchBaseQuery({ baseUrl: TODOS_URL }),
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
      query: () => "",
      providesTags: ["Todos"],
    }),
    addTodo: builder.mutation<void, string>({
      query: (title: string) => ({
        url: "",
        method: "POST",
        body: { title },
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Todos"],
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation, useDeleteTodoMutation } = todoApi;
