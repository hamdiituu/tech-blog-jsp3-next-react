import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  BlankPage,
  ContactFormsPage,
  LoginPage,
  DashboardPage,
  NotFoundPage,
} from "./pages";
import Template from "./components/Template";
import { AuthProvider } from "./contexts/AuthContext";

const root = createRoot(document.getElementById("root")!);

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <Template />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "blank",
        element: <BlankPage />,
      },
      {
        path: "contact-forms",
        element: <ContactFormsPage />,
      },
    ],
  },
  {
    id: "auth",
    path: "/auth",
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
  {
    id: "notFound",
    path: "*",
    element: <NotFoundPage />,
  },
]);

root.render(
  <AuthProvider>
    <RouterProvider router={router} fallbackElement={<p>Yükleniyor...</p>} />
  </AuthProvider>
);
