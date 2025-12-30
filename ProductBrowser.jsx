import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Sample data
const products = {
  electronics: [
    { id: 1, name: "Headphones", price: 59 },
    { id: 2, name: "Keyboard", price: 89 },
  ],
  clothing: [
    { id: 3, name: "T-Shirt", price: 19 },
    { id: 4, name: "Jeans", price: 49 },
  ],
  books: [
    { id: 5, name: "React Guide", price: 29 },
    { id: 6, name: "JavaScript Tips", price: 25 },
  ],
};

// Component to show products of a category
function Category({ category }) {
  const list = products[category] || [];

  return (
    <div style={{ padding: "1rem" }}>
      <h2 style={{ marginBottom: "1rem" }}>{category.toUpperCase()}</h2>
      {list.length === 0 && <p>No products found.</p>}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "1rem",
        }}
      >
        {list.map((p) => (
          <div
            key={p.id}
            style={{
              background: "#433333ff",
              padding: "1rem",
              borderRadius: "8px",
              textAlign: "center",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <h4 style={{ marginBottom: "0.5rem" }}>{p.name}</h4>
            <p>${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProductBrowser() {
  const categories = Object.keys(products);

  return (
    <Router>
      <div style={{ display: "flex", minHeight: "100vh" }}>
        {/* Sidebar */}
        <nav
          style={{
            width: "200px",
            background: "#1f2937",
            color: "#ede8e8ff",
            padding: "1rem",
          }}
        >
          <h2>Categories</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {categories.map((cat) => (
              <li key={cat} style={{ marginBottom: "0.5rem" }}>
                <Link
                  to={`/${cat}`}
                  style={{ color: "#ebe3e3ff", textDecoration: "none" }}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Main content */}
        <div style={{ flex: 1, background: "#262c33ff" }}>
          <Routes>
            <Route
              path="/"
              element={
                <div style={{ padding: "1rem" }}>
                  <h2>Welcome! Select a category</h2>
                </div>
              }
            />
            {categories.map((cat) => (
              <Route
                key={cat}
                path={`/${cat}`}
                element={<Category category={cat} />}
              />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
}
