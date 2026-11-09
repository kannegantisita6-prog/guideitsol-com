import React, { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button 
      className="glass-effect px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
      onClick={() => setCount(count + 1)}
    >
      count is {count}
    </button>
  );
}
