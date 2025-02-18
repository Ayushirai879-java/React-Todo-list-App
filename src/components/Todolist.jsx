import React, { useState } from "react";
import Result from "./Result";
import InputField from "./InputField";

export default function Todolist() {
  const [list, setList] = useState([]);
  function addItem(item) {
    const newVal = {
      id: new Date().getTime(),
      text: item,
    };
    setList((prevItem) => [...prevItem, newVal]);
  }
  function handleDelete(removePos) {
    setList((prevItem) => prevItem.filter((item) => item.id !== removePos));
  }

  return (
    <div className="todo-container">
      <h2>Todo App</h2>
      <div className="todo-input">
        <ol className="todo-list">
          <InputField addItem={addItem} />
          {list.map((newTask) => (
            <Result
              key={newTask.id}
              id={newTask.id}
              newItem={newTask.text}
              onDelete={handleDelete}
            />
          ))}
        </ol>
        {/* <p className="task-count">You have <span>0</span> pending tasks</p>
            <button className="clear-btn">Clear All</button> */}
      </div>
    </div>
  );
}
