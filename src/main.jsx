import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import LoginRegister from "./pages/Login-Register/Login-Register.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login-register",
    element: <LoginRegister />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
