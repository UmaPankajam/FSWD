import React, { useState } from "react";

function DashboardNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [count, setCount] = useState(1);

  // Add a new notification
  const addNotification = () => {
    const newNotification = {
      id: count,
      message: `You have a new notification #${count}`,
      read: false
    };
    setNotifications([newNotification, ...notifications]);
    setCount(count + 1);
    alert(`✅ New notification added: ${newNotification.message}`);
  };

  // Mark a notification as read
  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
    alert(`✅ Notification #${id} marked as read.`);
  };

  // Clear all notifications
  const clearNotifications = () => {
    setNotifications([]);
    alert("🗑️ All notifications cleared!");
  };

  return (
    <div style={{ width: "400px", margin: "50px auto", textAlign: "center" }}>
      <h2>Dashboard Notifications</h2>

      <button onClick={addNotification}>Add Notification</button>
      <button onClick={clearNotifications} style={{ marginLeft: "10px" }}>
        Clear All
      </button>

      <div style={{ marginTop: "20px", textAlign: "left" }}>
        {notifications.length === 0 ? (
          <p>No notifications</p>
        ) : (
          notifications.map((notif) => (
            <div
              key={notif.id}
              style={{
                padding: "10px",
                margin: "5px 0",
                backgroundColor: notif.read ? "#d3ffd3" : "#fff3cd",
                border: "1px solid #ccc",
                borderRadius: "5px",
                cursor: "pointer"
              }}
              onClick={() => markAsRead(notif.id)}
            >
              {notif.message} {notif.read && "(Read)"}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default DashboardNotifications;
//App.jsx

import DashboardNotifications from "./FSWD/ReactJS/DashboardNotifications";


function App() 
{
  return(<DashboardNotifications/>);
}

export default App
