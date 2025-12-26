import React from "react";

function HotelReservation() {
  const reserveRoom = () => {
    // Get guest name
    const guestName = prompt("Enter guest name:");
    if (!guestName || guestName.trim() === "") {
      alert("Reservation cancelled. Guest name is required.");
      return;
    }

    // Get room type
    const roomType = prompt(
      "Enter room type:\nSingle / Double / Deluxe"
    );
    if (!roomType || roomType.trim() === "") {
      alert("Reservation cancelled. Room type is required.");
      return;
    }

    // Get number of nights
    const nights = prompt("Enter number of nights:");
    if (!nights || isNaN(nights) || Number(nights) <= 0) {
      alert("Reservation cancelled. Please enter a valid number of nights.");
      return;
    }

    // Confirmation dialog
    const confirmation = confirm(
      `Confirm Reservation Details:\n\n` +
      `Guest Name: ${guestName}\n` +
      `Room Type: ${roomType}\n` +
      `Number of Nights: ${nights}`
    );

    if (confirmation) {
      alert(
        `✅ Reservation Successful!\n\n` +
        `Thank you, ${guestName}.\nEnjoy your stay!`
      );
    } else {
      alert("❌ Reservation cancelled by user.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h2>🏨 Hotel Reservation System</h2>
      <p>Click below to reserve a room</p>
      <button onClick={reserveRoom}>Reserve Room</button>
    </div>
  );
}

export default HotelReservation;

//App.jsx

import HotelReservation from "./FSWD/ReactJS/HotelReservation";

function App() 
{
  return(<HotelReservation/>);
}

export default App
