import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
 

  useEffect(() => {
    getData()
      .then((result) => setData(result))
      .catch((err) => setError(err));
  }, []);

  const getData = () => {
    return new Promise((resolve, reject) => {
      fetch("https://rickandmortyapi.com/api/character/1")
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch(() => reject("Error fetching data"));
    });
  };

  return (
    <div>
      <h1>Simple Fetch Example</h1>
  <p>{data.title}</p>
    </div>
  );
}

export default App;
//   fetch("https://rickandmortyapi.com/api/character")
