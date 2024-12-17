import React, { useState } from 'react';
import './EditProfileModal.css';

const EditProfileModal = ({ userDetails, userid, onClose, onSave }) => {
  const [profilepicture, setProfilePicture] = useState(userDetails.profilepicture);
  const [description, setDescription] = useState(userDetails.description);
  const [talents, setTalents] = useState(userDetails.talents); // Use talents directly as a string

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setProfilePicture(reader.result);
    if (file) reader.readAsDataURL(file);
  };

  const handleSave = async () => {
    try {
        const response = await fetch(`http://localhost:8080/api/userdet/update/${userid}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json', // Change to application/json
            },
            body: JSON.stringify({
                profilepicture, // Send the base64 string directly
                description,
                talents, // Send talents as a single string
            }),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const result = await response.json();
        onSave({ profilepicture, description, talents });
        onClose(); // Close modal after saving
    } catch (error) {
        console.error('Error updating profile:', error);
    }
};


  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Profile</h2>
        <label>Profile Picture</label>
        <input type="file" onChange={handleFileChange} />
        {profilepicture && <img src={profilepicture} alt="Preview" className="profile-preview" />}

        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="3"
        />

        <label>Talents</label>
        <input
          type="text"
          value={talents}
          onChange={(e) => setTalents(e.target.value)}
        />

        <button onClick={handleSave}>Save</button>
        <button onClick={onClose} className="cancel-button">Cancel</button>
      </div>
    </div>
  );
};

export default EditProfileModal;
