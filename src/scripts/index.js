import "../styles/main.css";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

document.addEventListener("DOMContentLoaded", () => {
  console.log("페이지가 로드되었습니다!");

  // React 18의 새로운 API 사용
  const root = document.getElementById("root");
  if (root) {
    const reactRoot = createRoot(root);
    reactRoot.render(<App />);
  }
});
