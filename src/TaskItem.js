import React, { useState } from 'react';

const TaskItem = ({ task, updateTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate);
  const [priority, setPriority] = useState(task.priority);
  const [status, setStatus] = useState(task.status);

  const handleSave = () => {
    updateTask({ ...task, title, description, dueDate, priority, status });
    setIsEditing(false);
  };

  return (
    <li className="mb-4 p-4 border border-gray-300 rounded">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 p-2 rounded mb-2 w-full"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-300 p-2 rounded mb-2 w-full"
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="border border-gray-300 p-2 rounded mb-2 w-full"
          />
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="border border-gray-300 p-2 rounded mb-2 w-full"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border border-gray-300 p-2 rounded mb-2 w-full"
          >
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <button
            onClick={handleSave}
            className="bg-green-500 text-white p-2 rounded w-full"
          >
            Save
          </button>
        </div>
      ) : (
        <div>
          <h3 className="text-xl font-semibold">{task.title}</h3>
          <p className="mb-2">{task.description}</p>
          <p className="mb-2">Due Date: {task.dueDate}</p>
          <p className="mb-2">Priority: <span className={`font-bold ${task.priority === 'High' ? 'text-red-500' : task.priority === 'Medium' ? 'text-yellow-500' : 'text-green-500'}`}>{task.priority}</span></p>
          <p className="mb-2">Status: <span className={`font-bold ${task.status === 'Completed' ? 'text-green-500' : 'text-orange-500'}`}>{task.status}</span></p>
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-500 text-white p-2 rounded mr-2"
          >
            Edit
          </button>
          <button
            onClick={() => deleteTask(task.id)}
            className="bg-red-500 text-white p-2 rounded"
          >
            Delete
          </button>
        </div>
      )}
    </li>
  );
};

export default TaskItem;
