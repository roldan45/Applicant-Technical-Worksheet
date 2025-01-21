import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  const isEven = count % 2 === 0;

  return (
    <div style={styles.container}>
      <h1>Counter App</h1>
      <p style={styles.count}>{count}</p>
      <p>{isEven ? 'Even' : 'Odd'}</p>
      <div style={styles.buttons}>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    margin: 0,
    backgroundColor: '#f0f0f0',
    fontFamily: 'Arial, sans-serif',
  },
  count: {
    fontSize: '3rem',
    fontWeight: 'bold',
  },
  buttons: {
    display: 'flex',
    gap: '10px',
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: '#007BFF',
    color: 'white',
    borderRadius: '5px',
  },
};
