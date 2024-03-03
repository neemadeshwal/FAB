import { createBrowserRouter } from "react-router-dom";
import Header from "../pages/Header";
import Home from "../pages/Home";
import Feedback from "../pages/Feedback";
export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "feedback",
        element: <Feedback />,
      },
    ],
  },
]);
