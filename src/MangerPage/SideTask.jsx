import React, { useState } from "react";

function SideTask() {
  const [todo, setTodo] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (!todo) return;
    console.log("Task Added:", todo);
    setTodo("");
  };

  return (
    <div className="p-6 min-h-screen rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Add a New Task</h2>
      <div className="bg-orange-200 border-gray-200 border p-2">
        <form onSubmit={addTask} className="flex gap-2">
          <input
            type="text"
            placeholder="Write Task..."
            className="w-full border rounded-l-lg px-3 py-2 outline-none"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded-r-lg">Add</button>
        </form>
      </div>

    </div>
  );
}

export default SideTask;
