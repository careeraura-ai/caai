// import React from "react";
// import ReactDOM from "react-dom/client";
// import { RouterProvider } from "react-router-dom";
// import router from "./router";
// import "./index.css";
// import LenisProvider from "./lib/LenisProvider";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <LenisProvider>
//       <RouterProvider router={router} />
//     </LenisProvider>
//   </React.StrictMode>
// );

// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./index.css";
import LenisProvider from "./lib/LenisProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LenisProvider>
      <RouterProvider router={router} />
    </LenisProvider>
  </React.StrictMode>
);
