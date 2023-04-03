import { createRoot } from "react-dom/client";
import { store } from "./components/store";
import { Provider } from "react-redux";

import "./index.css";

// page component
import App from "@src/components/App";

const container = document.getElementById("root");

if (container instanceof HTMLElement) {
  const root = createRoot(container);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}
