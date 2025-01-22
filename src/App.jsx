import React from "react";
import { useEffect, useState } from "react";
function App() {
  const [sam, setSam] = useState();
  useEffect(() => {
    setSam(980);
  });
  return (
    <div>
      <h1>Your number is {sam}</h1>
    </div>
  );
}

export default App;
