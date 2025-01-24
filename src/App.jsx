import React, { useState, useEffect } from "react";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch characters from the API
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setCharacters(data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {characters.map((character) => (
          <div
            key={character.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "10px",
              margin: "10px",
              width: "200px",
              textAlign: "center",
            }}
          >
            <img
              src={character.image}
              alt={character.name}
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <h3>{character.name}</h3>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
