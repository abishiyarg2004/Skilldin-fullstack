import React, { useState } from 'react';
import './UploadModal.css';

const UploadModal = ({ userid, onClose, onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [talentName, setTalentName] = useState('');
  const [description, setDescription] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile || !talentName || !description) {
      alert("Please fill in all fields and select a file before uploading.");
      return;
    }

    const formData = new FormData();
    formData.append('talentName', talentName);  // Add talent name
    formData.append('description', description);  // Add description
    formData.append('file', selectedFile);  // Add the file to formData
    formData.append('userid', userid);  // Add the user ID

    try {
      const response = await fetch('http://localhost:8080/api/posts/upload', {
        method: "POST",
        body: formData, // Send the formData directly
      });

      if (response.ok) {
        const newPost = await response.json();
        onUpload(newPost);  // Pass the new post data to the parent component
      } else {
        console.error("Error uploading post", response.statusText);
      }
    } catch (error) {
      console.error("Error uploading post", error);
    }
  };

  return (
    <div className="upload-modal">
      <div className="modal-content">
        <h2>Upload New Post</h2>
        <input
          type="text"
          placeholder="Enter talent name"
          value={talentName}
          onChange={(e) => setTalentName(e.target.value)}
        />
        <textarea
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default UploadModal;
