import React, { useState } from "react";
import { useEffect } from "react";
function App() {
  const [sam, setSam] = useState(0);

  useEffect(() => {
    document.title=(`the count is ${sam}`);
  });
  return (
    <div>
      <h1>{sam}</h1>
      <button onClick={() => setSam(sam + 1)}>incresse</button>
    </div>
  );
}

export default App;
