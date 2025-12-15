import React, { useState } from "react";
import "./ValidationForm.css";

function ValidationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    password: "",
    confirmPass: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    /* Required Field Validation */
    if (!form.name.trim()) {
      formErrors.name = "Name is required";
    }

    /* Regex Validation - Email */
    if (!form.email) {
      formErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      formErrors.email = "Invalid email format";
    }

    /* Regex Validation - Phone */
    if (!form.phone) {
      formErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.phone)) {
      formErrors.phone = "Enter valid 10-digit Indian number";
    }

    /* Range Validation - Age */
    if (!form.age) {
      formErrors.age = "Age is required";
    } else if (form.age < 18 || form.age > 60) {
      formErrors.age = "Age must be between 18 and 60";
    }

    /* Regex Validation - Password Strength */
    if (!form.password) {
      formErrors.password = "Password is required";
    } else if (!/(?=.*[A-Z])(?=.*\d).{6,}/.test(form.password)) {
      formErrors.password =
        "Password must have 1 uppercase & 1 number (min 6 chars)";
    }

    /* Compare Validation */
    if (!form.confirmPass) {
      formErrors.confirmPass = "Confirm password required";
    } else if (form.confirmPass !== form.password) {
      formErrors.confirmPass = "Passwords do not match";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      alert("🎉 Form Submitted Successfully!");
      console.log(form);
    }
  };

  return (
    <div className="container">
      <h2>✨ Creative Validation Form</h2>

      <form onSubmit={handleSubmit} className="form-box">

        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} />
        <span>{errors.name}</span>

        <input type="text" name="email" placeholder="Email Address" onChange={handleChange} />
        <span>{errors.email}</span>

        <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} />
        <span>{errors.phone}</span>

        <input type="number" name="age" placeholder="Age" onChange={handleChange} />
        <span>{errors.age}</span>

        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <span>{errors.password}</span>

        <input
          type="password"
          name="confirmPass"
          placeholder="Confirm Password"
          onChange={handleChange}
        />
        <span>{errors.confirmPass}</span>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default ValidationForm;
