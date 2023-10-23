import React from "react";
import ReactDOM from "react-dom/client";
import "./global.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Routes from "./router/routes.tsx"
const root = document.getElementById("root") as Element
const router = createBrowserRouter(Routes);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);;

