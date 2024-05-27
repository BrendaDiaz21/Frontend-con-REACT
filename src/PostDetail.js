import React, { useState } from 'react';
import './styles/PostDetail.css';

function PostDetail({ post, onBack }) {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(post.comments);
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newComment = { id: Date.now(), text: comment };
    setComments([...comments, newComment]);
    setComment('');
  };
  return (
    <div className="post-detail-container">
      <button onClick={onBack} className="back-button">Back</button>
      <h2>{post.title}</h2>
      {post.image && <img src={post.image} alt="Post" />}
      <p>{post.content}</p>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          placeholder="Add a comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">Comment</button>
      </form>
    </div>
  );
}

export default PostDetail;
