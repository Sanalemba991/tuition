import React, { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>
          <p>Name: {product.name}</p>
          <p>Price: {product.price}</p>
          <img src={product.image} />
        </div>
      ))}
    </div>
  );
}

export default App;
