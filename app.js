import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/components/body/About";
import Contact from "./src/components/body/Contact";
import Error from "./src/components/body/Error";
import Body from "./src/components/body/BodyComponent";
import HeaderComponent from "./src/components/header/HeaderComponent";
import RestaurantMenu from "./src/components/body/RestaurantMenu";
import FooterComponent from "./src/components/footer/FooterComponent";
import Shimmer from "./src/assets/common/Shimmer";

// App layout
// header
// - logo, nav items - Home, about, contact, support
// body
// -
// footer
// copy-right, social-media, about

const Grocery = lazy(() => import("./src/components/body/Grocery"));

const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={
            <h1>
              <Shimmer />
            </h1>
          }>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
