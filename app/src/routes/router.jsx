import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/App/AppLayout";
import HomePage from "../pages/App/Home/HomePage";
import AuthLayout from "../layouts/Auth/AuthLayout";
import LoginPage from "../pages/Auth/Login/LoginPage";
import RegisterPage from "../pages/Auth/Register/RegisterPage";
import AuthenticatedRoute from "./AuthenticatedRoute";
import GuestRoute from "./GuestRoute";

/**
 * Router object with all defined routes.
 */
const router = createBrowserRouter([
  // Main App Routes
  {
    element: <AuthenticatedRoute />,
    // Children of this route require an authenticated user.
    children: [
      {
        element: <MainLayout />,
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
    element: <GuestRoute />,
    // Children of this route require the user to NOT be authenticated.
    children: [
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
    ],
  },
]);

export default router;
