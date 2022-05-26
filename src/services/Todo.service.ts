import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ITodoFilters } from "interfaces";

export interface ITodoState {
  userId: number;
  id: number;
  title: string;
  completed: boolean
}

export const TodoSlice = createApi({
  reducerPath: 'TodoSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
    prepareHeaders(headers) {
      headers.set('authorization', `Bearer qweasdzxc`);
      return headers;
    }
  }),
  tagTypes: ['Todos'],
  endpoints(builder) {
    return {
      fetchTodos: builder.query<ITodoState[], ITodoFilters>({
        query({ _limit }) {
          return `/todos?_limit=${_limit}`;
        },
        providesTags: ['Todos']
      }),
      fetchTodo: builder.query<ITodoState, string | undefined>({
        query: (id) => `/todos/${id}`
      }),
      addTodo: builder.mutation<ITodoState, Partial<ITodoState>>({
        query: (body) => ({
          url: '/todos',
          method: 'POST',
          body
        }),
        invalidatesTags: [{ type: 'Todos', id: 'LIST' }]
      }),
      deleteTodo: builder.query<ITodoState, number>({
        query(id) {
          return `/todos/${id}`
        }
      })
    }
  }
});

export const { useFetchTodosQuery, useFetchTodoQuery, useDeleteTodoQuery, useAddTodoMutation } = TodoSlice
