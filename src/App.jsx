import React from "react";

import Character from "./Character";
import Read from "./Read";

import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Character />} />
          <Route path="/read/:id" element={<Read />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

