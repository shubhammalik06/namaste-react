import React from "react";
import ReactDOM from "react-dom/client";
import MainComponent from "./src/components/main/MainComponent";
import "./index.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/components/body/About";
import Contact from "./src/components/body/Contact";
import Error from "./src/components/body/Error";
import Body from "./src/components/body/BodyComponent";
import HeaderComponent from "./src/components/header/HeaderComponent";
import RestaurantMenu from "./src/components/body/RestaurantMenu";
// App layout
// header
// - logo, nav items - Home, about, contact, support
// body
// -
// footer
// copy-right, social-media, about

const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <Outlet />
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
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
