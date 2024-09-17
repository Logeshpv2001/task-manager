import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [status, setStatus] = useState('In Progress');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ title, description, dueDate, priority, status });
    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('Medium');
    setStatus('In Progress');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 border border-gray-300 rounded">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="border border-gray-300 p-2 rounded mb-2 w-full"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="border border-gray-300 p-2 rounded mb-2 w-full"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
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
        type="submit"
        className="bg-blue-500 text-white p-2 rounded w-full"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
