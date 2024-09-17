import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const initialTasks = [
  { id: uuidv4(), title: 'Finish React App', description: 'Complete the development of the task management React application with all CRUD functionalities.', dueDate: '2024-09-25', priority: 'High', status: 'In Progress' }
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState('');
  
  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: uuidv4() }]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(filter.toLowerCase()) ||
    task.description.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Task Manager</h1>
      <TaskForm addTask={addTask} />
      <input
        type="text"
        placeholder="Search tasks..."
        value={filter}
        onChange={handleFilterChange}
        className="border border-gray-300 p-2 rounded mb-4 w-full"
      />
      <TaskList
        tasks={filteredTasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
