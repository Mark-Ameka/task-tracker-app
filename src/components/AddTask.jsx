import React, { useState } from "react";
import Action from "./widgets/Action";
import Input from "./widgets/Input";
import { useLocalStorage } from "../localStorage/useLocalStorage";

function AddTask() {
  const [value, setValue] = useState("");

  const { setItem } = useLocalStorage("value");

  return (
    <div className="px-36">
      <h1 className="text-center my-3 mt-10 text-2xl font-semibold">
        Add Task
      </h1>
      <form>
        <div className="flex flex-col gap-2 max-w-xl mx-auto">
          <Input value={value} action={(e) => setValue(e.target.value)} />
          <Action
            text="Add new Task"
            class="bg-amber-700 text-white "
            action={() => setItem(value)}
          />
        </div>
      </form>
    </div>
  );
}

export default AddTask;
