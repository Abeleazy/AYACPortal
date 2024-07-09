import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AdminLogin from "./pages/Admin/Login";
import AdminLayout from "./pages/Admin/Layout";
import Dashboard from "./pages/Admin/Dashboard";
import Attendee from "./pages/Admin/Attendee";

function App() {
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
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "attendees",
          element: <Attendee />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
