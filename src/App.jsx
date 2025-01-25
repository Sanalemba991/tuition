import React, { useEffect, useState } from "react";

function App() {
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/1")
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <h1> Name: {character.name}</h1>
      <h1>Gender: {character.gender}</h1>
      <h1>Status: {character.status}</h1>
    </div>
  );
}

export default App;
