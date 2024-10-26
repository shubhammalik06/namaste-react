import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import HeaderComponent from "./src/components/main-components/header";
import BodyComponent from "./src/components/main-components/body";

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
      <BodyComponent />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
