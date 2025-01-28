import React, { useEffect } from "react";
import { useState } from "react";

function App() {
  const [sam, setSam] = useState([]);

  useEffect(() => {
    const fetchSam = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const data = await response.json();
        setSam(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSam();
  },[]);
  return <div>
    
  </div>;
}

export default App;
