import React, { useState } from 'react';
import './styles/CreatePostForm.css';
import PostDetail from './PostDetail';

function CreatePostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showPostList, setShowPostList] = useState(false); // Estado para controlar la visibilidad de la lista de posts

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { id: Date.now(), title, content, image, comments: [] };
    setPosts([...posts, newPost]);
    setTitle('');
    setContent('');
    setImage(null);
    console.log('Creating post with:', { title, content, image });
  };

  const handleLogout = () => {
    console.log('User logged out');
    window.location.href = '/login';
  };

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleShowPostList = () => {
    setShowPostList(true);
  };

  return (
    <div className="create-post-container">
      {selectedPost ? (
        <PostDetail post={selectedPost} onBack={() => setSelectedPost(null)} />
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <h2>Crear nuevo Post</h2>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <input type="file" onChange={handleImageChange} />
            <button type="submit">Create Post</button>
          </form>
          <button onClick={handleLogout} className="logout-button">Cerrar sesión</button>
          {showPostList ? (
            <ul>
              {posts.map((post) => (
                <li key={post.id} onClick={() => handlePostClick(post)}>
                  {post.title}
                </li>
              ))}
            </ul>
          ) : (
            <button onClick={handleShowPostList}>Ver lista de Posts</button>
          )}
        </>
      )}
    </div>
  );
}

export default CreatePostForm;
