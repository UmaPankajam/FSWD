import React from "react";

function CabBooking() {
  const bookCab = () => {
    // Get customer name
    const customerName = prompt("Enter customer name:");
    if (!customerName || customerName.trim() === "") {
      alert("Cab booking cancelled. Customer name is required.");
      return;
    }

    // Get pickup location
    const pickup = prompt("Enter pickup location:");
    if (!pickup || pickup.trim() === "") {
      alert("Cab booking cancelled. Pickup location is required.");
      return;
    }

    // Get drop location
    const drop = prompt("Enter drop location:");
    if (!drop || drop.trim() === "") {
      alert("Cab booking cancelled. Drop location is required.");
      return;
    }

    // Get cab type
    const cabType = prompt("Enter cab type:\nMini / Sedan / SUV");
    if (!cabType || cabType.trim() === "") {
      alert("Cab booking cancelled. Cab type is required.");
      return;
    }

    // Confirmation dialog
    const confirmation = confirm(
      `Confirm Cab Booking Details:\n\n` +
      `Customer Name: ${customerName}\n` +
      `Pickup Location: ${pickup}\n` +
      `Drop Location: ${drop}\n` +
      `Cab Type: ${cabType}`
    );

    if (confirmation) {
      alert(
        `🚕 Cab Booked Successfully!\n\n` +
        `Thank you, ${customerName}.\nYour cab will arrive shortly.`
      );
    } else {
      alert("❌ Cab booking cancelled by user.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h2>🚕 Online Cab Booking Application</h2>
      <p>Click below to book your cab</p>
      <button onClick={bookCab}>Book Cab</button>
    </div>
  );
}

export default CabBooking;
//App.jsx


import CabBooking from "./FSWD/ReactJS/CabBooking";


function App() 
{
  return(<CabBooking/>);
}

export default App
