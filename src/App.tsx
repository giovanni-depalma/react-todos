import tw from "twin.macro";
import { Outlet, Route, RouterProvider, Routes } from "react-router";
import { Provider } from "react-redux";
import { store } from "./store";
import { ComponentType } from "react";
import { TodoListRoute } from "./routes/TodoListRoute";
import GlobalStyles from "./styles/GlobalStyles";

const Container = tw.div`flex items-center justify-center bg-cyan-50`;

const Layout = () => 
  <Container>
    <GlobalStyles />
    <Outlet />
  </Container>


function App() {
  return (
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<TodoListRoute />} />
          </Route>
      </Routes>
  );
}

export default App;
