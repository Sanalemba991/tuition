import React, { useEffect, useState } from 'react';

function App() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1); 
  const [totalPages, setTotalPages] = useState(1); 

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        console.log(data)
        setTotalPages(data.info.pages);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [page]);

  return (
    <div>
      <h1>Rick and Morty</h1>
      {characters.map((character) => (
        <div key={character.id}>
          <h2>Name: {character.name}</h2>
          <p>Species: {character.species}</p>
          <img src={character.image} alt={character.name} width="160" />
        </div>
      ))}
      <div>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
          Next
        </button>
      </div>
      <p>Page {page} of {totalPages}</p>
    </div>
  );
}

export default App;
