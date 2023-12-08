import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskList from "./components/TaskList";
import Navbar from "./components/layouts/Navbar";
import AddTask from "./components/AddTask";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/add_task" element={<AddTask />} />
      </Routes>
    </Router>
  );
}

export default App;
