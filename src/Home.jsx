import React, { useEffect, useState } from "react";

function Home() {
  const [Mrt, setMrt] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => {
        setMrt(data);
      })
      .catch((error) => console.error("Error fetching data", error));
  }, []);

  const filteredMrt = Mrt.filter((tin) =>
    tin.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Fetching Data</h1>
      <input
        type="text"
        placeholder="Enter a title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredMrt.length > 0 ? (
        filteredMrt.map((tin) => (
          <div key={tin.id}>
            <p><strong>Id:</strong> {tin.id}</p>
            <p><strong>Title:</strong> {tin.title}</p>
            <p><strong>Brand:</strong> {tin.Brand}</p>
            <p><strong>Price:</strong> {tin.price}</p>
            <img src={tin.image} alt={tin.title} width="150" />
          </div>
        ))
      ) : (
        <p>No matching results found.</p>
      )}
    </div>
  );
}

export default Home;
