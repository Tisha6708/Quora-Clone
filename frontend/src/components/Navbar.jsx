function Navbar({ onAddClick }) {
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <h1 className="text-xl font-bold">Mini Quora</h1>
      <button onClick={onAddClick} className="bg-blue-600 text-white px-4 py-1 rounded">
        Add Post
      </button>
    </div>
  );
}

export default Navbar;
