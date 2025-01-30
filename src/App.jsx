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
      fetch("https://rickandmortyapi.com/api/character/2")
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch(() => reject("Error While Fetching"));
    });
  };
  return (
    <div>
      <h1>Name: {data.name}</h1>
      <p>Species: {data.species}</p>
    </div>
  );
}

export default App;

