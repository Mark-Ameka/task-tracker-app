import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="shadow-lg">
      <nav className="flex justify-between px-36 py-4">
        <h1>
          <Link to="/">Task Tracker App</Link>
        </h1>
        <ul>
          <li>
            <Link to="/add_task">Add Task</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
