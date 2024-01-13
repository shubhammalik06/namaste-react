import React from "react";
import ReactDOM from "react-dom/client";
import MainComponent from "./src/components/main/MainComponent";
import './index.scss';

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
          <MainComponent />
        </div>
    )
};



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);