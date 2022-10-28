import { Navigate, useRoutes } from "react-router-dom";
import DashboardLayout from "../components/common/DashboardLayout";
import Dashboard from "../components/dashboard/Dashboard";

// ----------------------------------------------------------------------

export default function Routes() {
  const routes = useRoutes([
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: "app", element: <Dashboard /> },
        // { path: "user", element: <UserPage /> },
        // { path: "products", element: <ProductsPage /> },
        // { path: "blog", element: <BlogPage /> },
      ],
    },
    // {
    //   path: "login",
    //   element: <LoginPage />,
    // },
    // {
    //   element: <SimpleLayout />,
    //   children: [
    //     { element: <Navigate to="/dashboard/app" />, index: true },
    //     { path: "404", element: <Page404 /> },
    //     { path: "*", element: <Navigate to="/404" /> },
    //   ],
    // },
    // {
    //   path: "*",
    //   element: <Navigate to="/404" replace />,
    // },
  ]);

  return routes;
}
