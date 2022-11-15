import { Navigate, useRoutes } from "react-router-dom";
import DashboardLayout from "../components/common/DashboardLayout";
import Dashboard from "../components/dashboard/Dashboard";
import PetsPage from "../components/pets/PetsPage";

// ----------------------------------------------------------------------

export default function Routes() {
  const routes = useRoutes([
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: "app", element: <Dashboard /> },
        { path: "pets", element: <PetsPage /> },
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
    {
      path: "*",
      element: <DashboardLayout />,
    },
  ]);

  return routes;
}
