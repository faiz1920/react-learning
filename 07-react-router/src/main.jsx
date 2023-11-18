import React from "react";
import ReactDOM from "react-dom/client";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout";
import About from "./components/about/About";
import ContactUs from "./components/contact-us/ContactUs";
import { FetchGithubInfo } from "./components/github/FetchGithubInfo";
import Github from "./components/github/Github";
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";
import "./index.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <ContactUs />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="user/:userId" element={<Profile />} />
      {/* <Route path="github" element={<Github />}></Route> */}
      <Route loader={FetchGithubInfo} path="github" element={<Github />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
