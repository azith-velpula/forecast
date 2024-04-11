import React from "react";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StartPage from "./StartPage";
import UserPage from "./UserPage";
import ErrorPage from "./ErrorPage";
import Whether from "./Whether";
import images from "../assets/img/images";
const Content = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <StartPage />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/:id",
          element: <UserPage />,
        },
        {
          path: "/:id/whether",
          element: <Whether />,
        },
      ],
      errorElement: <ErrorPage />,
    },
  ]);
  return (
    <div className="relative">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Content;
