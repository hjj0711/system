import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import routes from "./router/routes.jsx"
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter(routes);

root.render(
  <React.StrictMode>
    <RouterProvider theme={{ token: { colorPrimary: '#00b96b' } }} router={router} />
  </React.StrictMode>
);
