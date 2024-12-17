import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './UserProfile.css';
import './UserHome.css';
import NavBar from './NavBar';
import PostGrid from './PostGrid';
import UploadModal from './UploadModal';
import EditProfileModal from './EditProfileModal';

const UserHome = () => {
  const { userid } = useParams();
  const [userData, setUserData] = useState({ username: '', email: '' });
  const [userDetails, setUserDetails] = useState({
    profilepicture: '',
    description: '',
    talents: [],
  });
  const [posts, setPosts] = useState([]);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  // Fetch user data
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/users/getbyid/${userid}`);
        setUserData({
          username: response.data.username,
          email: response.data.email,
        });
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };
    fetchUserData();
  }, [userid]);

  // Fetch user details
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/userdet/getbyid/${userid}`);
        const details = response.data;
  
        setUserDetails({
          profilepicture: details.profilepicture
            ? `data:image/jpeg;base64,${details.profilepicture}`
            : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsH4sSrBsFiGNiGsyYDO2foiJJpXyQKNCcDpebr9diLWL8Suwa2BzcRoq8oHF-S0z6twg&usqp=CAU',  // Updated fallback image
          description: details.description || 'No description provided.',
          talents: Array.isArray(details.talents) ? details.talents : (details.talents ? details.talents.split(',').map(t => t.trim()) : []),
        });
      } catch (error) {
        console.error('Error fetching user details', error);
      }
    };
    fetchUserDetails();
  }, [userid]);
  

  // Fetch user posts
  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/posts/getbyuserid/${userid}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching user posts', error);
      }
    };
    fetchUserPosts();
  }, [userid]);

  const handleAddPostClick = () => {
    setShowUploadModal(true);
  };

  const handlePostUpload = (newPost) => {
    setPosts([newPost, ...posts]);
    setShowUploadModal(false);
  };

  const handleProfileEdit = (updatedDetails) => {
    setUserDetails(updatedDetails);
  };

  return (
    <div>
      
      <div className="user-profile-container">
        <div className="profile-header">
          <div className="profile-image">
            <img src={userDetails.profilepicture} alt="Profile" />
          </div>
          <div className="profile-details">
            <h2>{userData.username}</h2>
            <p>{userData.email}</p>
            <p>{userDetails.description}</p>
            <div className="talents">
              <strong>Talents: </strong>
              {userDetails.talents.length > 0
                ? userDetails.talents.join(', ')
                : 'No talents listed.'}
            </div>
            <div className="stats">
              <div className="stat">
                <span>{posts.length}</span> Posts
              </div>
              <div className="stat">
                <span>14</span> Job offers
              </div>
              <div className="stat">
                <span>52</span> Following
              </div>
            </div>
            <button onClick={() => setShowEditModal(true)} className="edit-profile-button">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
      <div className="media-grid">
        <PostGrid posts={posts} />
      </div>
      <button className="add-post-button" onClick={handleAddPostClick}>
        +
      </button>
      {showUploadModal && (
        <UploadModal
          userid={userid}
          onClose={() => setShowUploadModal(false)}
          onUpload={handlePostUpload}
        />
      )}
      {showEditModal && (
        <EditProfileModal
          userDetails={userDetails}
          userid={userid}
          onClose={() => setShowEditModal(false)}
          onSave={handleProfileEdit}
        />
      )}
    </div>
  );
};

export default UserHome;
