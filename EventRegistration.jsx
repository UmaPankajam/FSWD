import React from "react";

function EventRegistration() {
  const registerEvent = () => {
    // Get participant name
    const participantName = prompt("Enter participant name:");
    if (!participantName || participantName.trim() === "") {
      alert("Registration cancelled. Name is required.");
      return;
    }

    // Get event name
    const eventName = prompt("Enter event name:");
    if (!eventName || eventName.trim() === "") {
      alert("Registration cancelled. Event name is required.");
      return;
    }

    // Get email ID
    const email = prompt("Enter email ID:");
    if (!email || email.trim() === "") {
      alert("Registration cancelled. Email ID is required.");
      return;
    }

    // Confirmation alert
    const confirmation = confirm(
      `Confirm Event Registration:\n\n` +
      `Participant Name: ${participantName}\n` +
      `Event Name: ${eventName}\n` +
      `Email ID: ${email}`
    );

    if (confirmation) {
      alert(
        `✅ Registration Successful!\n\n` +
        `Thank you ${participantName} for registering.`
      );
    } else {
      alert("❌ Registration cancelled by user.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h2>🎉 Event Registration</h2>
      <p>Click the button below to register for an event</p>
      <button onClick={registerEvent}>Register Now</button>
    </div>
  );
}

export default EventRegistration;
//App.jsx

import EventRegistration from "./FSWD/ReactJS/EventRegistration";


function App() 
{
  return(<EventRegistration/>);
}

export default App
