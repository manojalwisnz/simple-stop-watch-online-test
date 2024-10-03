import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

import App from "./App";
import AppWrapper from "./AppWrapper";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <AppWrapper>
      <App />
    </AppWrapper>
  </StrictMode>
);
