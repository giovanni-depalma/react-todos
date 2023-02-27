import { ComponentType } from "react";
import { withServiceMobx } from "../service/mobx";
import { withServiceRedux } from "../service/redux";
import { withServiceUseSwr } from "../service/useSwr";
import { CrudTodos } from "../view/CrudTodos";

let CrudTodosController: ComponentType;
if(import.meta.env.VITE_SERVICE_IMPL === "mobx"){
    CrudTodosController = withServiceMobx(CrudTodos);
}
else if(import.meta.env.VITE_SERVICE_IMPL === "redux"){
    CrudTodosController = withServiceRedux(CrudTodos);
}
else{
    CrudTodosController = withServiceUseSwr(CrudTodos);
}

export {CrudTodosController}