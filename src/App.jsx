import React, { useEffect, useState } from "react";

const App = () => {
  const [character, setCharacter] = useState([]); 


  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/1")
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data); 
        console.log(data)
     
      })
     
  }, []);



  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h1>{character.name}</h1>
      <img
        src={character.image}
        alt={character.name}
        style={{ borderRadius: "8px", width: "150px", height: "150px" }}
      />
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
    </div>
  );
};

export default App;
