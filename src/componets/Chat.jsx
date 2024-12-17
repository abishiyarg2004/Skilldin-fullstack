import React, { useState } from 'react';
import './Chat.css';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [designation, setDesignation] = useState('');
  const [emojiPanel, setEmojiPanel] = useState(false);

  const sendMessage = () => {
    if (!message || !designation) return;

    const newMessage = {
      text: message,
      designation: designation,
      likes: 0,
      dislikes: 0,
    };
    setMessages([...messages, newMessage]);
    setMessage('');
  };

  const toggleEmojiPanel = () => {
    setEmojiPanel(!emojiPanel);
  };

  const addEmoji = (emoji) => {
    setMessage(message + emoji);
    setEmojiPanel(false);
  };

  const likeMessage = (index) => {
    const newMessages = [...messages];
    newMessages[index].likes += 1;
    setMessages(newMessages);
  };

  const dislikeMessage = (index) => {
    const newMessages = [...messages];
    newMessages[index].dislikes += 1;
    setMessages(newMessages);
  };

  return (
    <div className="chat-container">
      <h2>Chat</h2>
      <div className="designation-select">
        <label>
          Select Your Designation: 
          <select value={designation} onChange={(e) => setDesignation(e.target.value)}>
            <option value="">--Select--</option>
            <option value="Mentor">Mentor</option>
            <option value="Skilled Individual">Skilled Individual</option>
            <option value="Potential Customer">Potential Customer</option>
          </select>
        </label>
      </div>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className="message-box">
            <div className={`designation-tag ${msg.designation.replace(' ', '-').toLowerCase()}`}>
              {msg.designation}
            </div>
            <div className="message">{msg.text}</div>
            <div className="message-actions">
              <span className="like-btn" onClick={() => likeMessage(index)}>👍 {msg.likes}</span>
              <span className="dislike-btn" onClick={() => dislikeMessage(index)}>👎 {msg.dislikes}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={toggleEmojiPanel}>😊</button>
        <button onClick={sendMessage}>Send</button>
      </div>
      {emojiPanel && (
        <div className="emoji-panel">
          {['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆'].map((emoji) => (
            <span key={emoji} onClick={() => addEmoji(emoji)}>{emoji}</span>
          ))}
        </div>
      )}
    </div>
  );
}

export default Chat;
