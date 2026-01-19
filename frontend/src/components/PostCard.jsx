import { useState } from "react";

function PostCard({ post, onDelete, onUpdate }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newContent, setNewContent] = useState(post.content);
    return (
        <div className="border p-3 mb-3 rounded">
            <h3 className="font-semibold">{post.username}</h3>

            {isEditing ? (
                <textarea value={newContent} onChange={e => setNewContent(e.target.value)}
                    className="border p-1 w-full" />
            ) : (
                <p>{post.content}</p>
            )}

            <div className="flex gap-3 mt-2">
                {isEditing ? (
                    <button onClick={() => {
                        onUpdate(post._id, newContent);
                        setIsEditing(false);
                    }}
                        className="text-green-600" > Save </button >
                ) : (
                    <button onClick={() => setIsEditing(true)}
                        className="text-blue-600"> Edit </button>
                )}

                <button
                    onClick={() => onDelete(post._id)}
                    className="text-red-600 mt-2">
                    Delete
                </button>

            </div>
        </div>
    );
}

export default PostCard;
