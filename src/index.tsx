import { createServer } from "miragejs";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return [
        {
          id: 544564654,
          category: "Mercado",
          created_at: new Date(),
          price: -255.42,
          title: "Curso Ignite",
        },
        {
          id: 544564655,
          category: "Necisades",
          created_at: new Date(),
          price: 95.42,
          title: "Copel",
        },
      ];
    });
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
