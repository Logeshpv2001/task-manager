// src/TaskList.js
import React from 'react';
import { updateTask, deleteTask } from './redux/tasksSlice';
import { useSelector, useDispatch } from 'react-redux';
import TaskItem from './TaskItem';
import { List, Typography } from 'antd';

const { Title } = Typography;

const TaskList = () => {
  const tasks = useSelector(state => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <div>
      <Title level={3}>Task List</Title>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={tasks}
        renderItem={task => (
          <TaskItem
            key={task.id}
            task={task}
            updateTask={(updatedTask) => dispatch(updateTask(updatedTask))}
            deleteTask={(id) => dispatch(deleteTask(id))}
          />
        )}
      />
    </div>
  );
};

export default TaskList;
