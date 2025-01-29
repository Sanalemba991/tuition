import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((result) => setData(result));
  }, []);
  const getData = () => {
    return new Promise((resolve, reject) => {
      fetch("https://rickandmortyapi.com/api/character/2")
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch(() => reject("Error While Fetching"));
    });
  };
  return (
    <div>
      <h1>Name: {data.name}</h1>
      <h2>Status:{data.status}</h2>
      <h3>Species:{data.species}</h3>
      <p>Gender:{data.gender}</p>
      
    </div>
  );
}

export default App;
