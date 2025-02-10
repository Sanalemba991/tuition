import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [anganba, setAnganba] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setAnganba(data.results);
        console.log(data);
      });
  }, [page]);
  const filteresChaaracter = anganba.filter(anganbas => 
    anganbas.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="alls">
        <h1>Rick and Morty</h1>
        <input
        className="Am"
          type="text"
          placeholder="enter a name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {filteresChaaracter.map((character) => (
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
