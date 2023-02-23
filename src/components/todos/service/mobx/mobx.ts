import { makeAutoObservable } from "mobx"
import {Todo} from "../../domain/Todo"
import { fetcher, fetchAdd, fetchDelete } from "../../repository/todoRepository";

export class Mobx {
    todos:Todo[] | undefined = undefined
    isLoading: boolean = false
    error: any = undefined
    isDone: boolean = false;

    constructor() {
        makeAutoObservable(this)
    }

    init(){
        this.getTodos();
    }

    getTodos(){
        if(!this.isLoading){
            console.log("mobx getTodos");
            this.isLoading = true;
            fetcher().then(todos => {
                this.todos = todos;
                this.isLoading = false;
                this.error = undefined;
                this.isDone = true;
                console.log("mobx loaded", this.todos);
            }).catch((error) => {
                this.error = error;
                this.isLoading = false;
                this.todos = undefined;
                this.isDone = true;
            });
        }
    }

    async addTodo(todo: string){
        console.log("mobx addTodo");
        await fetchAdd(todo);
        this.getTodos();
    }

    async removeTodo(id: number){
        console.log("mobx removeTodo");
        await fetchDelete(id);
        this.getTodos();
    }
}