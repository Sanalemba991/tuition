import React, { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error.message);
        setError("Failed to load data. Check API connection.");
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Product List</h1>
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "8px",
          marginBottom: "15px",
          width: "100%",
          maxWidth: "300px",
        }}
      />

      {loading && <p>Loading data...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              marginBottom: "10px",
              borderRadius: "5px",
            }}
          >
            <p>
              <strong>Id:</strong> {product.id}
            </p>
            <p>
              <strong>Name:</strong> {product.name}
            </p>
            <p>
              <strong>Price:</strong> ${product.price}
            </p>
            <p>
              <strong>Category:</strong> {product.category}
            </p>
            <p>
              <strong>Description:</strong> <br /> {product.description}
            </p>
            {product.image && (
              <img
                src={product.image}
                alt={product.name}
                width="150"
                style={{ marginTop: "10px", borderRadius: "5px" }}
              />
            )}
          </div>
        ))
      ) : (
        !loading && <p>No matching results found.</p>
      )}
    </div>
  );
}

export default App;
