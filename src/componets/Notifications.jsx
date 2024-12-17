// Notifications.js
import React from 'react';
import './Notifications.css'; // Add your custom CSS here

const notifications = [
  {
    id: 1,
    message: 'You have a new connection request from Jane Doe.',
    time: '2 minutes ago',
  },
  {
    id: 2,
    message: 'Your post has received 5 new likes.',
    time: '10 minutes ago',
  },
  {
    id: 3,
    message: 'New job opportunities available in your field.',
    time: '30 minutes ago',
  },
  {
    id: 4,
    message: 'Your message to John has been sent successfully.',
    time: '1 hour ago',
  },
  {
    id: 5,
    message: 'You have a new comment on your photo.',
    time: '2 hours ago',
  },
  {
    id: 6,
    message: 'Your profile update has been approved.',
    time: '5 hours ago',
  },
  {
    id: 7,
    message: 'You received an endorsement for React skills from Anna.',
    time: '1 day ago',
  },
  {
    id: 8,
    message: 'Congratulations! You have been shortlisted for the UI/UX Designer role.',
    time: '2 days ago',
  },
  {
    id: 9,
    message: 'New notifications regarding company updates are available.',
    time: '3 days ago',
  },
  {
    id: 10,
    message: 'Your application for the Frontend Developer position has been received.',
    time: '1 week ago',
  }
];

const Notifications = () => {
  return (
    <div className="notifications-page">
     
      <div className="notifications-list">
        {notifications.map((notification) => (
          <div key={notification.id} className="notification-item">
            <p>{notification.message}</p>
            <span>{notification.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
