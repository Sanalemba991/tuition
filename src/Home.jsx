import React, { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]); // State for products
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    fetch("http://localhost:3000/products") // Fetch data from JSON Server
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data.products)) {
          setProducts(data.products[0] || []); // Extract the first array inside 'products'
        } else {
          setProducts([]); // Ensure products is always an array
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "15px" }}>
          {products.map((product) => (
            <div key={product.id} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px", textAlign: "center" }}>
              <img
                src={product.image || "https://via.placeholder.com/150"}
                alt={product.name || "Product"}
                style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "5px" }}
              />
              <h3>{product.name || "Unnamed Product"}</h3>
              <p><strong>Category:</strong> {product.category || "N/A"}</p>
              <p><strong>Price:</strong> ${product.price?.toFixed(2) || "0.00"}</p>
              <p>{product.description || "No description available."}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
