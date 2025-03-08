import { useEffect, useState } from "react";

const API_URL = "http://localhost:5000/products";

export default function Add() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: "" });

  // Fetch products from JSON server
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Add a new product to the JSON server
  const addProduct = () => {
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: newProduct.name,
        price: Number(newProduct.price),
      }),
    })
      .then((res) => res.json())
      .then((data) => setProducts([...products, data]))
      .catch((error) => console.error("Error adding product:", error));
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>

      <h3>Add Product</h3>
      <input
        type="text"
        placeholder="Name"
        value={newProduct.name}
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Price"
        value={newProduct.price}
        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
      />
      <button onClick={addProduct}>Add</button>
    </div>
  );
}
