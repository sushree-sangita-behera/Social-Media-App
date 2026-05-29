import React from "react";
import "../Styles/Notification.css";

function Notification() {
  const notifications = [
    "Welcome to your social media app!",
    "Your post was created successfully.",
    "You can now search and delete posts.",
  ];

  return (
    <div className="notification-container">
      <h2>Notifications</h2>

      {notifications.map((notification, index) => (
        <div className="notification-card" key={index}>
          {notification}
        </div>
      ))}
    </div>
  );
}

export default Notification;