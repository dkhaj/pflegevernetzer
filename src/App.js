import React, { useState } from 'react';
import Header from './components/Header';
import Post from './components/Post';
import './App.css';

function App() {
  const [posts, setPosts] = useState([
    { title: 'Erster Beitrag', content: 'Dies ist der erste Beitrag in der Community.' },
    { title: 'Zweiter Beitrag', content: 'Hier kannst du deine Gedanken teilen und diskutieren.' },
  ]);

  const [newPost, setNewPost] = useState({ title: '', content: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleAddPost = () => {
    setPosts([...posts, newPost]);
    setNewPost({ title: '', content: '' });
  };

  return (
    <div className="App">
      <Header />
      <h1>Willkommen zur Community App!</h1>
      <p>Hier kannst du deine eigene Plattform aufbauen.</p>
      <div className="new-post">
        <input
          type="text"
          name="title"
          placeholder="Titel"
          value={newPost.title}
          onChange={handleInputChange}
        />
        <textarea
          name="content"
          placeholder="Inhalt"
          value={newPost.content}
          onChange={handleInputChange}
        />
        <button onClick={handleAddPost}>Beitrag hinzufügen</button>
      </div>
      <div className="posts">
        {posts.map((post, index) => (
          <Post key={index} title={post.title} content={post.content} />
        ))}
      </div>
    </div>
  );
}

export default App;
