import React from 'react';
import TaskInput from '../components/TaskInput/TaskInput';
import TaskList from '../components/TaskList/TaskList';

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
}
