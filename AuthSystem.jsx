import React, { useState } from "react";

function AuthSystem() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple validation
    if (!username || !password) {
      alert("❌ Both username and password are required.");
      return;
    }

    // Dummy credentials (simulation only)
    const validUsername = "admin";
    const validPassword = "12345";

    if (username === validUsername && password === validPassword) {
      alert("✅ Login successful! Welcome.");
    } else {
      alert("❌ Invalid username or password.");
    }
  };

  return (
    <div style={{ width: "300px", margin: "80px auto", textAlign: "center" }}>
      <h2>Basic Authentication</h2>

      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label><br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default AuthSystem;
//App.jsx

import AuthSystem from "./FSWD/ReactJS/AuthSystem";

function App() 
{
  return(<AuthSystem/>);
}

export default App
