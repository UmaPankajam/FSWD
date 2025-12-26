import React from "react";

function FlightBooking() {
  const handleBooking = () => {
    const passengerName = prompt("Enter passenger name:");
    if (passengerName === null || passengerName.trim() === "") {
      alert("Booking cancelled. Passenger name is required.");
      return;
    }

    const destination = prompt("Enter destination:");
    if (destination === null || destination.trim() === "") {
      alert("Booking cancelled. Destination is required.");
      return;
    }

    const confirmation = confirm(
      `Confirm Flight Booking:\n\nPassenger: ${passengerName}\nDestination: ${destination}`
    );

    if (confirmation) {
      alert(`🎫 Flight booked successfully!\nHave a safe journey, ${passengerName}.`);
    } else {
      alert("Flight booking cancelled.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h2>Flight Ticket Booking System</h2>
      <button onClick={handleBooking}>Book Ticket</button>
    </div>
  );
}

export default FlightBooking;
