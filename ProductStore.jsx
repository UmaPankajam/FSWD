import React, { useState } from "react";

export default function ProductStore() {
  const products = [
    { id: 1, name: "Headphones", price: 59 },
    { id: 2, name: "Keyboard", price: 89 },
    { id: 3, name: "Mouse", price: 39 },
    { id: 4, name: "Monitor", price: 199 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #4e244bff;
        }

        .store {
          max-width: 1000px;
          margin: auto;
          padding: 1rem;
          display: grid;
          grid-template-columns: 3fr 1fr;
          gap: 1rem;
        }

        .products {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }

        .card {
          background: #4e244bff;
          padding: 1rem;
          border-radius: 6px;
        }

        button {
          margin-top: 0.5rem;
          padding: 0.5rem;
          width: 100%;
          border: none;
          background: #f3babaff;
          color: #4e244bff;
          cursor: pointer;
        }

        .cart-item {
          font-size: 14px;
          border-bottom: 1px solid #ddd;
          padding: 0.25rem 0;
        }

        @media (max-width: 768px) {
          .store {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="store">
        {/* Product List */}
        <div className="products">
          {products.map((p) => (
            <div key={p.id} className="card">
              <h3>{p.name}</h3>
              <p>${p.price}</p>
              <button onClick={() => addToCart(p)}>Add to Cart</button>
            </div>
          ))}
        </div>

        {/* Cart */}
        <div className="card">
          <h2>Cart</h2>
          {cart.length === 0 && <p>No items</p>}

          {cart.map((item, i) => (
            <div key={i} className="cart-item">
              {item.name} – ${item.price}
            </div>
          ))}

          <hr />
          <strong>Total: ${total}</strong>
        </div>
      </div>
    </>
  );
}
//App.jsx


import ProductStore from "./Fswd/Sample/ProductStore"

function App() {
  return <ProductStore/>
    
}
export default App
