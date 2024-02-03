import {
    createBrowserRouter,
  } from "react-router-dom";
import CreateView from "../Views/Create/CreateView";
import ReadView from "../Views/Read/ReadView";
import UpdateView from "../Views/Update/UpdateView";
import Layout from "../Views/Layout";
import ErrorView from "../Views/Error/ErrorView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorView />,
    children: [
      {
        path: "/",
        element: <ReadView />
      },
      {
        path: "/update",
        element: <UpdateView />
      },
      {
        path: "/create",
        element: <CreateView />
      },
    ]
  },
 
]);