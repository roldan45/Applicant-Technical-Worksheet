export default function Home() {
  return (
    <div style={styles.container}>
      <h1>Hello World</h1>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    margin: 0,
    backgroundColor: '#f0f0f0'
  }
};
