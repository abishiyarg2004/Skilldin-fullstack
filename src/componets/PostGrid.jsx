import React, { useState } from 'react';
import './PostGrid.css';

const PostGrid = ({ posts }) => {
  const [likes, setLikes] = useState(posts.map(() => 0)); // Array to store likes for each post

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] += 1;
    setLikes(newLikes);
  };

  return (
    <div className="post-grid">
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <div key={index} className="post-item">
            {/* Display media */}
            {post.imageData ? (
              <img
                src={`data:image/png;base64,${post.imageData}`}
                alt={`Post ${index + 1}`}
                className="post-media"
              />
            ) : post.videoData ? (
              <video controls className="post-media">
                <source
                  src={`data:video/mp4;base64,${post.videoData}`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            ) : (
              <p>No media available</p>
            )}

            {/* Post details and like button */}
            <div className="post-details">
              <h3>{post.talent_name}</h3>
              <p>{post.description}</p>

              {/* Like Section */}
              <div className="post-interactions">
                <span className="like-button" onClick={() => handleLike(index)}>
                  ❤️ {likes[index]} Likes
                </span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No posts to display</p>
      )}
    </div>
  );
};

export default PostGrid;
