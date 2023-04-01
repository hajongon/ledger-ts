import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

import './index.css'
import EntireList from "./components/SearchList";

// page component
import App from "@src/components/App";

const container = document.getElementById("root");

if (container instanceof HTMLElement) {
  const root = createRoot(container);
  root.render(
    <App />
  );
}
