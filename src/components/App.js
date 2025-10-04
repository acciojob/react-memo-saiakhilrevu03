import React, { useState, useEffect, useMemo } from 'react';
import ReactMemo from './ReactMemo';
import UseMemo from './UseMemo';

function App() {
  const [todos, setTodos] = useState(['Sample Task']);
  const [taskInput, setTaskInput] = useState('');
  const [counter, setCounter] = useState(0);
  const [customTask, setCustomTask] = useState('');

  // Optimized calculation (simulate expensive)
  const expensiveCalculation = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < 10000000; i++) {
      sum += i;
    }
    return sum;
  }, []);

  // Add default "New todo"
  const handleAddTodo = () => {
    setTodos([...todos, 'New todo']);
  };

  // Increment counter
  const handleIncrement = () => {
    setCounter(prev => prev + 1);
  };

  // Validate custom task
  const handleAddCustomTask = () => {
    if (customTask.length > 5) {
      setTodos([...todos, customTask]);
      setCustomTask('');
    } else {
      alert('Task must be more than 5 characters');
    }
  };

  return (
    <div>
      <h1>Task Management App</h1>

      <button data-cy="add-todo" onClick={handleAddTodo}>Add Todo</button>

      {/* To-Do List, memoized */}
      <ReactMemo todos={todos} />

      {/* Counter with button */}
      <UseMemo counter={counter} />
      <button data-cy="increment-btn" onClick={handleIncrement}>Increment</button>

      {/* Memoized input for custom task */}
      <div>
        <input
          className="task-input"
          placeholder="Enter task > 5 characters"
          value={customTask}
          onChange={(e) => setCustomTask(e.target.value)}
        />
        <button data-cy="add-task-btn" onClick={handleAddCustomTask}>Add Task</button>
      </div>
    </div>
  );
}

export default App;
