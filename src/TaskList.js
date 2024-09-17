import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  return (
    <ul className="list-none p-0">
      {tasks.sort((a, b) => {
        if (a.dueDate !== b.dueDate) return new Date(a.dueDate) - new Date(b.dueDate);
        return a.priority.localeCompare(b.priority);
      }).map(task => (
        <TaskItem
          key={task.id}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
