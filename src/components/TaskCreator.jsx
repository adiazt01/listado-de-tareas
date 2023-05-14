import { useState } from "react";
import {FaPlusCircle} from "react-icons/fa" 

// eslint-disable-next-line react/prop-types
function TaskCreator({ createNewTask }) {
  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit = (e) => {
    createNewTask(newTaskName);
    e.preventDefault();
    setNewTaskName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
      />
      <button><FaPlusCircle/></button>
    </form>
  );
}

export default TaskCreator;
