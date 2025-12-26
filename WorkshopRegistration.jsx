import React, { useState } from "react";

function WorkshopRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    workshop: "",
    level: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Registration submitted successfully!");
  };

  return (
    <div style={{ display: "flex", gap: "40px", margin: "50px" }}>
      
      {/* Registration Form */}
      <div style={{ width: "300px" }}>
        <h2>Workshop Registration</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label><br />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Email:</label><br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Workshop Topic:</label><br />
            <input
              type="text"
              name="workshop"
              value={formData.workshop}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Skill Level:</label><br />
            <select
              name="level"
              value={formData.level}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          <br />
          <button type="submit">Register</button>
        </form>
      </div>

      {/* Live Preview */}
      <div style={{ width: "300px", padding: "15px", border: "1px solid #ccc" }}>
        <h3>Live Preview</h3>
        <p><strong>Name:</strong> {formData.name || "—"}</p>
        <p><strong>Email:</strong> {formData.email || "—"}</p>
        <p><strong>Workshop:</strong> {formData.workshop || "—"}</p>
        <p><strong>Skill Level:</strong> {formData.level || "—"}</p>
      </div>

    </div>
  );
}

export default WorkshopRegistration;
//App.jsx

import WorkshopRegistration from "./FSWD/ReactJS/WorkshopRegistration";


function App() 
{
  return(<WorkshopRegistration/>);
}

export default App
