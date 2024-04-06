import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Blank, ContactForms, Login, Dashboard, Notfound } from "./pages";
import Template from "./components/Template/Template";

const root = createRoot(document.getElementById("root")!);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<Dashboard />} />
        <Route path="/blank" element={<Blank />} />
        <Route path="/contact-forms" element={<ContactForms />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  </BrowserRouter>
);
