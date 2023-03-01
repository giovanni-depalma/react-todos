import { batch, signal } from "@preact/signals-react";
import {Todo} from "../../domain/Todo"
import { fetcher, fetchAdd, fetchDelete } from "../../repository/todoRepository";

const currentTodos = signal<Todo[] | undefined>(undefined);
const currentIsLoading = signal(false);
const currentIsDone = signal(false);
const currentError = signal(undefined);

export function getTodos(){
    if(!currentIsLoading.value){
        console.log("signals getTodos");
        currentIsLoading.value = true
        fetcher().then(todos => {
            console.log("signals loaded");
            batch(()=> {
                currentTodos.value = todos;
                currentIsLoading.value = false;
                currentIsDone.value = true;
                currentError.value = undefined;
            })
            console.log(currentTodos.value);
        }).catch((error) => {
            batch(()=> {
                currentError.value = error;
                currentTodos.value = undefined;
                currentIsLoading.value = false;
                currentIsDone.value = true;
            });
        });
    }
 }

 export async function addTodo(todo: string){
    console.log("signals addTodo");
    await fetchAdd(todo);
    getTodos();
}

export async function removeTodo(id: number){
    console.log("signals removeTodo");
    await fetchDelete(id);
    getTodos();
}

export {currentError as error, currentIsDone as isDone, currentIsLoading as isLoading, currentTodos as todos}