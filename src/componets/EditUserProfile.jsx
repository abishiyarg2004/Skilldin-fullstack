import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EditUserProfile.css';  // Add your styles

const EditUserProfile = () => {
  const { userid } = useParams();
  const navigate = useNavigate();
  
  const [userData, setUserData] = useState({
    description: '',
    talents: [],
    profilepicture: null,
  });

  // Fetch user data on load
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/users/getbyid/${userid}`);
        const user = response.data;
        setUserData({
          description: user.description,
          talents: user.talents || [],
          profilepicture: user.profilepicture,
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userid]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle talents as a comma-separated string
  const handleTalentsChange = (e) => {
    const talents = e.target.value.split(',').map((talent) => talent.trim());
    setUserData((prevData) => ({
      ...prevData,
      talents,
    }));
  };

  // Handle profile picture upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setUserData((prevData) => ({
        ...prevData,
        profilepicture: reader.result.split(',')[1], // Store as Base64 string
      }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/users/update/${userid}`, userData);
      alert('User details updated successfully!');
      navigate(`/user/${userid}`);  // Redirect to user profile page
    } catch (error) {
      console.error('Error updating user details:', error);
      alert('Failed to update user details');
    }
  };

  return (
    <div className="edit-profile-container">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={userData.description}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Talents (comma separated)</label>
          <input
            type="text"
            value={userData.talents.join(', ')}
            onChange={handleTalentsChange}
          />
        </div>

        <div className="form-group">
          <label>Profile Picture</label>
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>

        <button type="submit" className="submit-button">Update Profile</button>
      </form>
    </div>
  );
};

export default EditUserProfile;
