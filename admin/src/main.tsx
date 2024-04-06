import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Blank, Login } from "./pages";

const root = createRoot(document.getElementById("root")!);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Blank />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);
