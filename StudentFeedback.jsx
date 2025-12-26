import React, { useState } from "react";

function StudentFeedback() {
  const [feedback, setFeedback] = useState({
    name: "",
    rating: "",
    comments: ""
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setFeedback({
      ...feedback,
      [e.target.name]: e.target.value
    });
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    if (!feedback.name.trim()) newErrors.name = "Name is required";
    if (!feedback.rating) newErrors.rating = "Rating is required";
    if (!feedback.comments.trim()) newErrors.comments = "Comments are required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert(
        `✅ Feedback submitted!\n\n` +
        `Name: ${feedback.name}\n` +
        `Rating: ${feedback.rating}\n` +
        `Comments: ${feedback.comments}`
      );
      // Clear form
      setFeedback({ name: "", rating: "", comments: "" });
      setErrors({});
    } else {
      alert("❌ Please fill all required fields.");
    }
  };

  return (
    <div style={{ width: "400px", margin: "50px auto", textAlign: "left" }}>
      <h2>Student Feedback</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={feedback.name}
            onChange={handleChange}
          />
          <div style={{ color: "red" }}>{errors.name}</div>
        </div>

        <br />

        {/* Rating */}
        <div>
          <label>Rating:</label><br />
          <select name="rating" value={feedback.rating} onChange={handleChange}>
            <option value="">-- Select Rating --</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
          <div style={{ color: "red" }}>{errors.rating}</div>
        </div>

        <br />

        {/* Comments */}
        <div>
          <label>Comments:</label><br />
          <textarea
            name="comments"
            value={feedback.comments}
            onChange={handleChange}
            rows="4"
            cols="50"
          />
          <div style={{ color: "red" }}>{errors.comments}</div>
        </div>

        <br />
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

export default StudentFeedback;
//App.jsx
import StudentFeedback from "./FSWD/ReactJS/StudentFeedback";

function App() 
{
  return(<StudentFeedback/>);
}

export default App
