import React from "react";
import ReactDOM from "react-dom/client";
import { Routing } from "./pages";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "./styles/styles.scss";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <Routing />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
