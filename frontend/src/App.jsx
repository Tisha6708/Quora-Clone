// import {useEffect, useState} from 'react'
// import './App.css'
// import axios from 'axios'

// function App() {
//   const [posts, setPosts] = useState([]);
//   const [username, setUsername] = useState("");
// const [content, setContent] = useState("");

//   useEffect(()=>{
//     axios.get('http://localhost:3000/api/posts')
//     .then((response)=>{
//       setPosts(response.data);
//     })
//     .catch((error)=>{
//       console.log(error);
//     })
//   });

//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   const res = await axios.post("/api/posts", { username, content });

//   setPosts(prev => [res.data, ...prev]);
//   setUsername("");
//   setContent("");
// };

//   return (
//     <>
//       <h1>POSTS</h1>

//       {posts.map((post)=>(
//         <div key={post._id}>
//           <h3>{post.username}</h3>
//           <p>{post.content}</p>
//         </div>
//       ))}

//       <form onSubmit={handleSubmit}>
//   <input
//     placeholder="username"
//     value={username}
//     onChange={e => setUsername(e.target.value)}
//   />

//   <input
//     placeholder="content"
//     value={content}
//     onChange={e => setContent(e.target.value)}
//   />

//   <button>Add</button>
// </form>

//     </>
//   )
// }

// export default App;

import Home from "./pages/Home";

function App() {
  return <Home />;
}

export default App;
