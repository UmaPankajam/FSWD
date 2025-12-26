import React, { useState } from "react";

function RoleLogin() {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username.trim()) {
      alert("Username is required");
      return;
    }

    if (!role) {
      alert("Please select a role");
      return;
    }

    // Role-based redirection (demo using alerts)
    if (role === "admin") {
      alert(`Welcome Admin ${username}! Redirecting to Admin Dashboard...`);
      // window.location.href = "/admin";
    } else if (role === "user") {
      alert(`Welcome ${username}! Redirecting to User Dashboard...`);
      // window.location.href = "/user";
    } else if (role === "guest") {
      alert(`Welcome Guest! Redirecting to Guest Page...`);
      // window.location.href = "/guest";
    }
  };

  return (
    <div style={{ width: "300px", margin: "80px auto", textAlign: "center" }}>
      <h2>Login</h2>

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
          <label>Select Role:</label><br />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">-- Select Role --</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="guest">Guest</option>
          </select>
        </div>

        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default RoleLogin;
//App.jsx

import RoleLogin from "./FSWD/ReactJS/RoleLogin";



function App() 
{
  return(<RoleLogin/>);
}

export default App
