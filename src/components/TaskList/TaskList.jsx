import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../../redux/taskSlice';

export default function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <ul className="space-y-2">
      {tasks.map((task, index) => (
        <li key={index} className="flex justify-between items-center p-2 bg-gray-100 dark:bg-gray-800 rounded">
          <span>{task}</span>
          <button onClick={() => dispatch(deleteTask(index))} className="text-red-500">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
