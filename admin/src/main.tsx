import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Blank, ContactForms, Login, Dashboard, Notfound } from "./pages";
import Template from "./components/Template";
import { AuthProvider } from "./contexts/Auth";

const root = createRoot(document.getElementById("root")!);

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <Template />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "blank",
        element: <Blank />,
      },
      {
        path: "contact-forms",
        element: <ContactForms />,
      },
    ],
  },
  {
    id: "auth",
    path: "/auth",
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    id: "notFound",
    path: "*",
    element: <Notfound />,
  },
]);

root.render(
  <AuthProvider>
    <RouterProvider router={router} fallbackElement={<p>Yükleniyor...</p>} />
  </AuthProvider>
);
