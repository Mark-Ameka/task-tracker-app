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
    <div className="max-w-lg mx-auto">
      <h1 className="text-3xl ">Task List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
