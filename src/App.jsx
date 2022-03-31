import React from "react";
import { BrowserRouter } from "react-router-dom";
import HomeRoutes from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <div>
        <HomeRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
