// src/TaskForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './redux/tasksSlice';
import { Button, DatePicker, Form, Input, Select, Typography } from 'antd';
import { v4 as uuidv4 } from 'uuid';

const { Text } = Typography;
const { Option } = Select;

const TaskForm = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    dispatch(addTask({ ...values, id: uuidv4() }));
    form.resetFields();
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      className="mb-4 p-4 border border-gray-300 rounded"
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: 'Please input the title!' }]}
      >
        <Input placeholder="Task Title" />
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: 'Please input the description!' }]}
      >
        <Input.TextArea placeholder="Task Description" />
      </Form.Item>
      <Form.Item
        label="Due Date"
        name="dueDate"
        rules={[{ required: true, message: 'Please select the due date!' }]}
      >
        <DatePicker className="w-full" />
      </Form.Item>
      <Form.Item
        label="Priority"
        name="priority"
        rules={[{ required: true, message: 'Please select the priority!' }]}
      >
        <Select>
          <Option value="Low">Low</Option>
          <Option value="Medium">Medium</Option>
          <Option value="High">High</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Status"
        name="status"
        rules={[{ required: true, message: 'Please select the status!' }]}
      >
        <Select>
          <Option value="In Progress">In Progress</Option>
          <Option value="Completed">Completed</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Task
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TaskForm;
