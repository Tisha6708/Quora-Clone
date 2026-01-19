import PostCard from "./PostCard";

function PostList({ posts, onDelete, onUpdate }) {
  return (
    <div className="p-4">
      {posts.map(post => (
        <PostCard 
        key={post._id} 
        post={post} 
        onDelete={onDelete}
        onUpdate={onUpdate} />
      ))}
    </div>
  );
}

export default PostList;
