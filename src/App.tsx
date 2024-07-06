import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AdminLogin from "./pages/Admin/Login";
import AdminLayout from "./pages/Admin/Layout";
import Dashboard from "./pages/Admin/Dashboard";

function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/admin",
      children: [
        {
          index: true,
          element: <AdminLogin />,
        },
      ],
    },
    {
      path: "/admin",
      Component: AdminLayout,
      children: [
        {
          path: "Dashboard",
          element: <Dashboard />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
