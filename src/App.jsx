import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        console.log(data);
      });
  }, [page]);

  const filteredCharacters = characters.filter(character => 
    character.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="alls">
        <h1>Rick and Morty API Integration</h1>
        <input cl
          type="text"
          placeholder="Search characters..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />
        {filteredCharacters.map((character) => (
          <div className="all" key={character.id}>
            <h2 className="anganba">Name: {character.name}</h2>
            <p className="anganbaP">Species: {character.species}</p>
            <img
              className="img"
              src={character.image}
              alt={character.name}
              width="160"
            />
          </div>
        ))}
      </div>
      <div>
        <button
          onClick={() => {
            setPage(page - 1);
          }}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;