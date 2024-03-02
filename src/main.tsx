import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";

import App from "./App-memo.tsx"

import { PostsProvider } from "./context/PostsContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PostsProvider>
      <App />
    </PostsProvider>
  </React.StrictMode>
);
