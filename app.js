import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import HeaderComponent from "./src/components/main-components/header";
import BodyComponent from "./src/components/main-components/body";
import About from "./src/components/main-components/about";
import Contact from "./src/components/main-components/contact";
import Error from "./src/components/shared-components/error";

// App layout
// header
// - logo, nav items - Home, about, contact, support
// body
// -
// footer
// copy-right, social-media, about

// const Grocery = lazy(() => import("./src/components/body/Grocery"));

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
