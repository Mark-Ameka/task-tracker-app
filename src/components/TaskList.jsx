import React, { useState, useEffect } from "react";
import { useLocalStorage } from "../localStorage/useLocalStorage";

function TaskList() {
  const { getItem } = useLocalStorage("value");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const retrievedItems = getItem();
    setItems(retrievedItems);
  }, []);

  return (
    <div className="px-36">
      <h1>Task List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
