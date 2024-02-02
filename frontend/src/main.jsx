import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import page
import MentionPage from "./pages/MentionPage";
import Product from "./components/Product";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/mention",
        element: <MentionPage />,
      },
      {
        path: "*",
        element: <div>404 NOT FOUND</div>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
