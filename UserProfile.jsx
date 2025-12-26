import React, { useState } from "react";

function UserProfile() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: ""
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Form validation
  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (isNaN(formData.age) || formData.age <= 0) {
      newErrors.age = "Enter a valid age";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("✅ Profile updated successfully!");
    } else {
      alert("❌ Please fix the validation errors.");
    }
  };

  return (
    <div style={{ width: "300px", margin: "80px auto" }}>
      <h2>User Profile</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <div style={{ color: "red" }}>{errors.name}</div>
        </div>

        {/* Email */}
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <div style={{ color: "red" }}>{errors.email}</div>
        </div>

        {/* Age */}
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
          <div style={{ color: "red" }}>{errors.age}</div>
        </div>

        <br />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default UserProfile;
//App.jsx


import UserProfile from "./FSWD/ReactJS/UserProfile";


function App() 
{
  return(<UserProfile/>);
}

export default App
