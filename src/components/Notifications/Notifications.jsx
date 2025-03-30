import React, { useState } from 'react';
import './Notifications.css';

const Notifications = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(3); // Example count

  const toggleNotifications = () => {
    setIsOpen(!isOpen);
  };

  // Sample notifications data
  const notifications = [
    { id: 1, text: "Votre livre 'React Avancé' est dû demain", read: false },
    { id: 2, text: "Nouveaux livres disponibles", read: false },
    { id: 3, text: "Votre réservation est prête", read: true }
  ];

  return (
    <div className="notifications-container">
      <button 
        className="notification-button"
        onClick={toggleNotifications}
      >
        <i className="fas fa-bell"></i>
        {unreadCount > 0 && (
          <span className="notification-badge">{unreadCount}</span>
        )}
      </button>

      {isOpen && (
        <div className="notification-dropdown">
          <div className="notification-header">
            <h3>Notifications</h3>
            <button 
              className="mark-all-read"
              onClick={() => setUnreadCount(0)}
            >
              Tout marquer comme lu
            </button>
          </div>
          
          <div className="notification-list">
            {notifications.map(notification => (
              <div 
                key={notification.id} 
                className={`notification-item ${!notification.read ? 'unread' : ''}`}
              >
                <p>{notification.text}</p>
                <span className="notification-time">Il y a 2h</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;