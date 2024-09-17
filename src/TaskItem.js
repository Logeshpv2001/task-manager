// src/TaskItem.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Card, Form, Input, Select, DatePicker, Typography } from 'antd';
import { updateTask } from './redux/tasksSlice';
import moment from 'moment';

const { Text } = Typography;
const { Option } = Select;

const TaskItem = ({ task, deleteTask }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [form] = Form.useForm();

  const handleSave = (values) => {
    dispatch(updateTask({
      ...task,
      ...values,
      dueDate: values.dueDate ? values.dueDate.format('YYYY-MM-DD') : task.dueDate
    }));
    setIsEditing(false);
  };

  const handleEditClick = () => {
    form.setFieldsValue({
      ...task,
      dueDate: task.dueDate ? moment(task.dueDate) : null
    });
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    deleteTask(task.id);
  };

  return (
    <Card>
      {isEditing ? (
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            ...task,
            dueDate: task.dueDate ? moment(task.dueDate) : null
          }}
          onFinish={handleSave}
        >
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: 'Please input the title!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: 'Please input the description!' }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name="dueDate"
            label="Due Date"
            rules={[{ required: true, message: 'Please select the due date!' }]}
          >
            <DatePicker className="w-full" />
          </Form.Item>
          <Form.Item
            name="priority"
            label="Priority"
            rules={[{ required: true, message: 'Please select the priority!' }]}
          >
            <Select>
              <Option value="Low">Low</Option>
              <Option value="Medium">Medium</Option>
              <Option value="High">High</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="status"
            label="Status"
            rules={[{ required: true, message: 'Please select the status!' }]}
          >
            <Select>
              <Option value="In Progress">In Progress</Option>
              <Option value="Completed">Completed</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="mr-2">
              Save
            </Button>
            <Button onClick={handleCancelClick}>
              Cancel
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <div>
          <Text strong>Task Title: {task.title}</Text>
          <p>Task Description: {task.description}</p>
          <p>Due Date: {task.dueDate ? moment(task.dueDate).format('MMMM D, YYYY') : 'N/A'}</p>
          <p>Priority: <span className={`font-bold ${task.priority === 'High' ? 'text-red-500' : task.priority === 'Medium' ? 'text-yellow-500' : 'text-green-500'}`}>{task.priority}</span></p>
          <p>Status: <span className={`font-bold ${task.status === 'Completed' ? 'text-green-500' : 'text-orange-500'}`}>{task.status}</span></p>
          <Button
            type="link"
            onClick={handleEditClick}
            className="mr-2"
          >
            Edit
          </Button>
          <Button
            type="link"
            danger
            onClick={handleDeleteClick}
          >
            Delete
          </Button>
        </div>
      )}
    </Card>
  );
};

export default TaskItem;
