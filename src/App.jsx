import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Character from "./Character";
import Read from "./Read";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Character />} />
          <Route path="/character/:id===" element={<Read/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
