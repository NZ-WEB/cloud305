import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "../App";
import { NotFoundPage } from "../features/counter/not-found/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
