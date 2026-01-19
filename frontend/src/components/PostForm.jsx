import { useState } from "react";

function PostForm({ onSubmit, onClose }) {
  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ username, content });
    setUsername("");
    setContent("");
  };

  return (
    <div className="p-4 border m-4 rounded">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          placeholder="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="border p-1"
        />
        <textarea
          placeholder="content"
          value={content}
          onChange={e => setContent(e.target.value)}
          className="border p-1"
        />
        <div className="flex gap-2">
          <button className="bg-green-600 text-white px-3 py-1 rounded">Post</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default PostForm;
