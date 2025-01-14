import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar bg-gray-200 dark:bg-gray-900 p-4">
      <h2 className="text-xl font-bold mb-4">Todo App</h2>
      <ul>
        <li>
          <Link to="/" className="sidebar-link">
            Dashboard
          </Link>
        </li>
        <li>
          <a href="#logout" className="sidebar-link">
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
}
