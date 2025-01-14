import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Sidebar from "./components/Sidebar/Sidebar";


function App() {
  return (
      <Router>
        <div className="flex">
          <Sidebar />
          <div className="flex-grow p-4 bg-gray-100 dark:bg-gray-800">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </Router>
  );
}
export default App;
