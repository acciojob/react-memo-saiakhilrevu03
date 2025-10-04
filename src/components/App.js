import React, { useState, useCallback } from "react";
import UseMemo from "./UseMemo";
import ReactMemo from "./ReactMemo";

function App() {
  const [todos, setTodos] = useState(["Sample todo"]);
  const [counter, setCounter] = useState(0);
  const [customInput, setCustomInput] = useState("");
  const [inputError, setInputError] = useState("");

  const handleAddTodo = () => {
    setTodos((prev) => [...prev, "New todo"]);
  };

  const handleInputChange = (e) => {
    setCustomInput(e.target.value);
    if (e.target.value.length <= 5) {
      setInputError("Task must be more than 5 characters");
    } else {
      setInputError("");
    }
  };

  const handleAddCustomTodo = () => {
    if (customInput.length > 5) {
      setTodos((prev) => [...prev, customInput]);
      setCustomInput("");
      setInputError("");
    } else {
      setInputError("Task must be more than 5 characters");
    }
  };

  const handleIncrement = () => setCounter((c) => c + 1);

  // Only create this memoized callback once
  const memoizedIncrement = useCallback(handleIncrement, []);

  return (
    <div style={{ padding: 30, maxWidth: 500 }}>
      <h2>Task Management App</h2>

      <ReactMemo todos={todos} />
      <button onClick={handleAddTodo} data-cy="add-todo">Add Todo</button>

      <div style={{ marginTop: 20 }}>
        <input
          type="text"
          value={customInput}
          onChange={handleInputChange}
          placeholder="Custom task"
          data-cy="memo-input"
        />
        <button
          onClick={handleAddCustomTodo}
          disabled={customInput.length <= 5}
          data-cy="submit-custom"
        >
          Submit
        </button>
        {inputError && <div style={{ color: "red" }}>{inputError}</div>}
      </div>

      <hr />

      <UseMemo counter={counter} />

      <button onClick={memoizedIncrement} data-cy="increment">
        Increment Counter
      </button>
    </div>
  );
}

export default App;
