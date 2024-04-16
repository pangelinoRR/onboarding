import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/Main/MainLayout";
import HomePage from "../pages/Home/HomePage";
import AuthLayout from "../layouts/Auth/AuthLayout";
import LoginPage from "../pages/Auth/Login/LoginPage";
import RegisterPage from "../pages/Auth/Register/RegisterPage";
import AuthenticatedRoute from "./AuthenticatedRoute";

/**
 * Router object with all defined routes.
 */
const router = createBrowserRouter([
  // Main App Routes
  {
    element: <MainLayout />,
    children: [
      // Children of this route require an authenticated user.
      {
        element: <AuthenticatedRoute />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
        ],
      },
    ],
  },
  // Auth Routes
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <LoginPage />,
      },
      {
        path: "/auth/register",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router;
