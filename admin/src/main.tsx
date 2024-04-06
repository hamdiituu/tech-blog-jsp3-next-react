import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlankPage from "./pages/Blank/BlankPage";

const root = createRoot(document.getElementById("root")!);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<BlankPage />} />
    </Routes>
  </BrowserRouter>
);
