import React, { useMemo } from 'react';

function UseMemo({ counter }) {
  // Simulate an expensive calculation
  const doubleCounter = useMemo(() => {
    let result = counter;
    for (let i = 0; i < 10000000; i++) {
      result = result;
    }
    return counter * 2;
  }, [counter]);

  return (
    <div>
      <p>
        Counter: <span data-cy="counter">{counter}</span>
      </p>
      <p>
        Double (useMemo): <span data-cy="double-value">{doubleCounter}</span>
      </p>
    </div>
  );
}

export default UseMemo;
