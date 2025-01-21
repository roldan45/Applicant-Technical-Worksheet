import { useState } from 'react';

export default function Home() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const handleReset = () => {
    setNum1(0);
    setNum2(0);
  };

  const sum = Number(num1) + Number(num2);

  return (
    <div style={styles.container}>
      <h1>Simple Calculator</h1>
      <div style={styles.inputGroup}>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          style={styles.input}
        />
        <span>+</span>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          style={styles.input}
        />
      </div>
      <h2>Sum: {sum}</h2>
      <button onClick={handleReset} style={styles.resetButton}>Reset</button>
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
  inputGroup: {
    display: 'flex',
    gap: '10px',
    fontSize: '1.5rem',
  },
  input: {
    padding: '10px',
    fontSize: '1.2rem',
    textAlign: 'center',
    width: '80px',
  },
  resetButton: {
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: '#FF6347',
    color: 'white',
    borderRadius: '5px',
    marginTop: '20px',
  },
};
