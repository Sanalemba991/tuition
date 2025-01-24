import React, { useState } from "react";
import { useEffect } from "react";
function App() {
  const [sam, setSam] = useState(0);
  useEffect(() => {
document.title=(`Ei chak Chage ${sam}`);
  });
  return (
    <div>
      <h1>{sam}</h1>
      <button onClick={() => setSam(sam + 1*2 )}>increse</button>
    </div>
  );
}

export default App;
