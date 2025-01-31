import React, { useEffect, useState } from "react"; //React Hooks

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((result) => {
      console.log(result);
      setData(result);
    });
  }, []);
  const getData = () => {
    return new Promise((resolve, reject) => {
      fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch(() => reject("Error While Fetching"));
    });
  };
  
  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      {data?.map((character) => (
        <div key={character.id}>
          <h2>Name: {character.name}</h2>
          <p>Species: {character.species}</p>
          <img src={character.image} alt={character.name} width="150" />
        </div>
      ))}
    </div>
  );
}

export default App;

