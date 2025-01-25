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
  });

  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
    </div>
  );
};

export default App;
