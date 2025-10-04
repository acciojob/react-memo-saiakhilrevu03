import React from 'react';

const TodoList = React.memo(function TodoList({ todos }) {
  return (
    <ul data-cy="todo-list">
      {todos.map((todo, idx) => (
        <li key={idx}>{todo}</li>
      ))}
    </ul>
  );
});

function ReactMemo({ todos }) {
  return (
    <div>
      <h3>Todos</h3>
      <TodoList todos={todos} />
    </div>
  );
}

export default ReactMemo;
