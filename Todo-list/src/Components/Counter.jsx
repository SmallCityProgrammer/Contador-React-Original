// Counter.js
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Contador</h2>
      <p className='conta'>Conta: {count}</p>
      <button className='btn' onClick={increment}>Incrementar</button>
      <button className='btn' onClick={decrement}>Decrementar</button>
    </div>
  );
}

export default Counter;
