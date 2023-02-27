import { ComponentType } from "react";
import { Spinner } from "./Spinner";

interface WithLoaderProps {
  isLoading: boolean;
  error: any;
}

export const withLoader =
  <P extends object>(Component: ComponentType<P>) =>
  (props: P & WithLoaderProps) => {
    if (props.isLoading) return <Spinner />;
    if (props.error) return <div>Error</div>;
    else return <Component {...props} />;
  };
