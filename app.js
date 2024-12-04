import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./src/components/Footer";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
// import  { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { createBrowserRouter } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};



const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<AppLayout />);
