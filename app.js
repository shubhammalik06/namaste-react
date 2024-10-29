import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import HeaderComponent from "./src/components/main-components/header";
import BodyComponent from "./src/components/main-components/body";
import Error from "./src/components/shared-components/error";
import RestaurantMenuComponent from "./src/components/restaurant-components/restaurant-menu";

const About = lazy(() => import("./src/components/main-components/about"));
const Contact = lazy(() => import("./src/components/main-components/contact"));

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
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenuComponent />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
