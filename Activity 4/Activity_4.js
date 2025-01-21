import { useState } from 'react';

export default function Home() {
  const [size, setSize] = useState(100);
  const [color, setColor] = useState(getRandomColor());

  const handleClick = () => {
    setSize(size * 2);
    setColor(getRandomColor());
  };

  return (
    <div style={styles.container}>
      <button onClick={handleClick} style={{ ...styles.button, width: size, height: size, backgroundColor: color }}>
        GROW
      </button>
    </div>
  );
}

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    margin: 0,
    backgroundColor: '#f0f0f0',
  },
  button: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    borderRadius: '10px',
    transition: 'all 0.3s ease',
  },
};
