import React, { useEffect, useState } from "react";

const App = () => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/1")
      .then((response) => response.json())
      .then((ram) => {
        setCharacter(ram);
        console.log(ram);
      });
  },[]);

  return (
    <div>
    
    </div>
  );
};

export default App;
