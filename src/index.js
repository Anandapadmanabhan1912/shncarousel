import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Carousel from "./Carousel";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <h1>Trial Carousel</h1>
    <Carousel />
  </StrictMode>
);
