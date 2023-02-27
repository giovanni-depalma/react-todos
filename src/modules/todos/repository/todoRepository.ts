import axios from 'axios';
import { Todo } from '../domain/Todo';

//export const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";
export const TODOS_URL = "http://localhost:4000/todos";


export const fetcher = () => axios.get<Todo[]>(TODOS_URL, {
  headers: {
    Accept: 'application/json',
  },
}).then((r) => r.data);

export const fetchAdd = async (todo: string) => axios.post(TODOS_URL, {
      title: todo,
  }).then((r) => r.data);

export const fetchDelete = async (id: number) => axios.delete(`${TODOS_URL}/${id}`);