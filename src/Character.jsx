import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
function Character() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [page]);

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="character-container">
      <h1>Rick and Morty</h1>
      <input
        className="search-input"
        type="text"
        placeholder="Enter a character name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="character-list">
        {filteredCharacters.map((character) => (
          <div className="character-card" key={character.id}>
            <h2>{character.name}</h2>
            <p>Species: {character.species}</p>
            <img src={character.image} alt={character.name} width="160" />
            <div className="link-wrapper">
              <Link to={`/character/${character.id}`}>Go to full page</Link>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
}
export default Character;
