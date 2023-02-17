import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Layout/Header";
import MainBody from "./MainBody";
import Footer from "./Layout/Footer"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div style={{backgroundColor:"black", color:"white"}}>
    <Header />
    <div className="px-4">
    <MainBody />
    </div>
    <Footer />
  </div>
);
