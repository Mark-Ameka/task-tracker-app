import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskList from "./components/TaskList";
import Navbar from "./components/layouts/Navbar";
import AddTask from "./components/AddTask";
import ViewTask from "./components/ViewTask";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/add_task" element={<AddTask />} />
        {/* <Route path="/view_task" element={<ViewTask />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
