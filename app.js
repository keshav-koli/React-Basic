import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Footer from "./src/components/Footer";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Body from "./src/components/Body";
import Error from "./src/components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import { createBrowserRouter,RouterProvider } from "react-router";
import ResturantMenu from "./src/components/ResturantMenu";
import UserContext from "./src/utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import Cart from "./src/components/Cart";
// import Grocery from "./src/components/Grocery";
// Chunking
// Code Splitting
// Dynamic Bundling
// lazy loading
// on demand loading
// Dynamic import



const Grocery = lazy(() => import("./src/components/Grocery"));

const AppLayout = () => {

  const[userName,setUserName]=useState("");

  useEffect(() => {
    const data = {
      fetched_User_name: "keshav"
    };
    setUserName(data.fetched_User_name)
  }, [])

  return (
    <>
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedUser: userName, setUserName}}>
      <Header />
      <Outlet />
      <Footer />
      </UserContext.Provider>
      </Provider>
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
        element: <Body />,
      },
      {
        path: "/About",
        element: <About />,
      },

      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Grocery",
        element: (
          <Suspense fallback={<h1>loading.....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      // {
      //   path: "/grocery",
      //   element: <Grocery />,
      // },
      {
        path: "/resturantMenu/:resid",
        element: <ResturantMenu />,
      },
      {
        path:"/cart",
        element:<Cart />
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);
