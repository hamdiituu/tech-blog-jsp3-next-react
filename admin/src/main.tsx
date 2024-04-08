import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 1,
      cacheTime: 1000 * 60 * 1,
      refetchOnWindowFocus: false,
    },
  },
});

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
    path: "login",
    element: <LoginPage />,
  },
  {
    id: "notFound",
    path: "*",
    element: <NotFoundPage />,
  },
]);

root.render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} fallbackElement={<p>Yükleniyor...</p>} />
    </QueryClientProvider>
  </AuthProvider>
);
