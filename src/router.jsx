// // src/router.jsx
// import { createBrowserRouter } from "react-router-dom";

// // Layouts
// import PublicLayout from "./layouts/PublicLayout";
// import AuthLayout from "./layouts/AuthLayout";
// import AppLayout from "./layouts/AppLayout";

// // Public pages
// import LandingPage from "./pages/LandingPage";
// import LoginPage from "./pages/LoginPage";
// import SignupPage from "./pages/SignupPage";

// // App pages
// import Dashboard from "./pages/app/Dashboard";
// import AvatarAssessment from "./pages/app/AvatarAssessment";
// import ChatbotAssessment from "./pages/app/ChatbotAssessment";

// const router = createBrowserRouter([
//   // PUBLIC SECTION (Landing + Header + Footer)
//   {
//     path: "/",
//     element: <PublicLayout />,
//     children: [
//       { index: true, element: <LandingPage /> },
//     ],
//   },

//   // LOGIN / SIGNUP (NO Header/Footer)
//   {
//     path: "/",
//     element: <AuthLayout />,
//     children: [
//       { path: "login", element: <LoginPage /> },
//       { path: "signup", element: <SignupPage /> },
//     ],
//   },

//   // MAIN APP AREA (After login)
//   {
//     path: "/app",
//     element: <AppLayout />,
//     children: [
//       { index: true, element: <Dashboard /> },
//       { path: "avatar", element: <AvatarAssessment /> },
//       { path: "chatbot", element: <ChatbotAssessment /> },
//     ],
//   },
// ]);

// // export default router;

// // src/router.jsx
// import { createBrowserRouter } from "react-router-dom";

// // Layouts
// import PublicLayout from "./layouts/PublicLayout";
// import AuthLayout from "./layouts/AuthLayout";
// import AppLayout from "./layouts/AppLayout";

// // Pages
// import LandingPage from "./pages/LandingPage";
// import LoginPage from "./pages/LoginPage";
// import SignupPage from "./pages/SignupPage";

// // App pages
// import Dashboard from "./pages/app/Dashboard";
// import AvatarAssessment from "./pages/app/AvatarAssessment";
// import ChatbotAssessment from "./pages/app/ChatbotAssessment";

// const router = createBrowserRouter([
//   // PUBLIC (Landing) - uses PublicLayout (header + footer)
//   {
//     path: "/",
//     element: <PublicLayout />,
//     children: [
//       { index: true, element: <LandingPage /> },
//     ],
//   },

//   // AUTH (login/signup) - uses AuthLayout (no header/footer)
//   {
//     path: "/",
//     element: <AuthLayout />,
//     children: [
//       { path: "login", element: <LoginPage /> },
//       { path: "signup", element: <SignupPage /> },
//     ],
//   },

//   // APP area (after login) - uses AppLayout
//   {
//     path: "/app",
//     element: <AppLayout />,
//     children: [
//       { index: true, element: <Dashboard /> }, // /app
//       { path: "avatar", element: <AvatarAssessment /> }, // /app/avatar
//       { path: "chatbot", element: <ChatbotAssessment /> }, // /app/chatbot
//     ],
//   },
// ]);

// export default router;

// src/router.jsx
// src/router.jsx
import { createBrowserRouter } from "react-router-dom";

// Layouts
import PublicLayout from "./layouts/PublicLayout";
import AuthLayout from "./layouts/AuthLayout";
import AppLayout from "./layouts/AppLayout";

// Public pages
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

// Main App Core
import MainApp from "./pages/app/MainApp";

// Sub-routes inside MainApp
import AvatarAssessment from "./pages/app/AvatarAssessment";
import ChatbotAssessment from "./pages/app/ChatbotAssessment";

const router = createBrowserRouter([
  // PUBLIC AREA (Landing Page)
  {
    element: <PublicLayout />,
    children: [
      { index: true, element: <LandingPage /> },
    ],
  },

  // AUTH AREA (Login / Signup)
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SignupPage /> },
    ],
  },

  // MAIN APP (Protected)
{
  path: "/app",
  element: <AppLayout />,
  children: [
    { index: true, element: <MainApp /> },
    { path: "avatar", element: <AvatarAssessment /> },
    { path: "chatbot", element: <ChatbotAssessment /> },
  ]
}
]);

export default router;
