import React, { useState } from "react";

import { useEffect } from "react";

function App() {
  const [sam, setSam] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/1")
      .then((response) => response.json())
      .then((ram) => {
        setSam(ram);
        console.log(ram);
      });
  }, []);
  return (
    <div>
      <h2>{sam.name}</h2>
    </div>
  );
}

export default App;
