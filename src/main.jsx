import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import LoginRegister from "./pages/Login-Register/Login-Register.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "login-register",
      element: <LoginRegister />,
    },
    {
      path: "dashboard",
      element: <Dashboard />,
    },
  ],
  {
    basename: process.env.NODE_ENV === "production" ? "/maxgrind" : "/",
  }
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>
);
