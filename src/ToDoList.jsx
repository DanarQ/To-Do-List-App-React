import React, { useState } from "react";
import { GoArrowDown, GoArrowUp, GoCircleSlash } from "react-icons/go";
function ToDoList() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }
  function addTask() {
    if (newTask.trim() !== "") {
      setTask((prevTask) => [...prevTask, newTask]);
      setNewTask("");
    }
  }
  // i need to learn more about this today i don't really feels that good
  function deleteTask(index) {
    const updatedTask = task.filter((_, i) => i !== index);
    setTask(updatedTask);
  }
  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index - 1]] = [
        updatedTask[index - 1],
        updatedTask[index],
      ];
      setTask(updatedTask);
    }
  }
  function moveTaskDown(index) {
    if (index < task.length - 1) {
      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index + 1]] = [
        updatedTask[index + 1],
        updatedTask[index],
      ];
      setTask(updatedTask);
    }
  }
  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        ></input>
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {task.map((tasks, index) => (
          <li key={index}>
            <span className="text">{tasks}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              <GoCircleSlash />
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              <GoArrowUp />
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              <GoArrowDown />
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
