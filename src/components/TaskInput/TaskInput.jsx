import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/taskSlice';

export default function TaskInput() {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task));
      setTask('');
    }
  };

  return (
    <div className="flex items-center space-x-2 p-4 bg-white dark:bg-gray-700 rounded-md shadow">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
        className="flex-grow p-2 border rounded dark:text-black"
      />
      <button onClick={handleAddTask} className="bg-green-500 text-white px-4 py-2 rounded">
        Add Task
      </button>
    </div>
  );
}
