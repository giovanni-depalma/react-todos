import { ComponentType } from "react";
import { TodoHooks } from "./TodoHooks";

interface WithServicProps {
    hooks: TodoHooks
}

export type WithService = <P extends object>(Component: ComponentType<P & WithServicProps>) => ComponentType<P>

