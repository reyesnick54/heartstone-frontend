import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ApiProvider } from "@heartstone/api-client/react";
import "@heartstone/tokens/tokens.css";
import "@heartstone/ui/styles.css";
import "./app.css";
import { App } from "./App";

const container = document.getElementById("root");
if (!container) {
  throw new Error("HeartStone: root element #root not found.");
}

createRoot(container).render(
  <StrictMode>
    <ApiProvider>
      <App />
    </ApiProvider>
  </StrictMode>,
);
