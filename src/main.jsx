import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
import RestroBody from "./components/RestroBody";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import ShimmerUI from "./components/ShimmerUI";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const RestroDetails = lazy(() => import("./components/RestroDetails"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <RestroBody />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurants/:restaurantId",
        element: (
          <Suspense fallback={<ShimmerUI />}>
            <RestroDetails />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
