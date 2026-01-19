import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";

function Home() {
  const [posts, setPosts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axios.get("/api/posts")
      .then(res => setPosts(res.data))
      .catch(err => console.log(err));
  }, []);

  const addPost = async (data) => {
    const res = await axios.post("/api/posts", data);
    setPosts(prev => [res.data, ...prev]);
    setShowForm(false);
  };

  const updatePost = async (id, content) => {
    const res = await axios.patch(`/api/posts/${id}`, {content});
    setPosts(prev =>
        prev.map(p => (p._id === id ? res.data : p))
    );
  };

  const deletePost = async (id) => {
    await axios.delete(`/api/posts/${id}`);
    setPosts(prev => prev.filter(p => p._id !== id));
  };

  return (
    <>
      <Navbar onAddClick={() => setShowForm(true)} />

      {showForm && <PostForm onSubmit={addPost} onClose={() => setShowForm(false)} />}

      <PostList posts={posts} onDelete={deletePost} onUpdate={updatePost}/>
    </>
  );
}

export default Home;
