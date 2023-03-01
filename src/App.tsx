import tw from "twin.macro";
import { Outlet, Route, RouterProvider, Routes } from "react-router";
import { Provider } from "react-redux";
import { store } from "./store";
import { ComponentType, useState } from "react";
import { TodoListRoute } from "./routes/TodoListRoute";
import GlobalStyles from "./styles/GlobalStyles";
import { HomeRoute } from "./routes/HomeRoute";
import { NavLink } from "react-router-dom";
import { AuthProvider } from "./modules/auth/service";
import { LoginPage } from "./modules/auth/view/LoginPage";
import { RequireAuth } from "./modules/auth/view/RequireAuth";

const Container = tw.div`flex items-center justify-center bg-cyan-50`;

const Layout = () => 
  <Container>
    <GlobalStyles />
    <Outlet />
  </Container>

function App() {
 

  return (
    <AuthProvider>
      <Routes>
          <Route element={<Layout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={
              <RequireAuth>
                <TodoListRoute />
              </RequireAuth>
            } />
          </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
