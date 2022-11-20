import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Home } from "./Home";
import { ListUsers } from "./ListUsers";
import { CreateUser } from "./CreateUser";
import { Login } from "./Login";
import { Signup } from "./Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: localStorage.getItem("id") ? (
      <Home />
    ) : (
      <Navigate replace to={"/login"} />
    ),
  },
  {
    path: "/list-users",
    element: <ListUsers />,
  },
  {
    path: "/create-user",
    element: <CreateUser />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
