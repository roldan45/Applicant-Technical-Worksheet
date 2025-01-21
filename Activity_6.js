import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://random-data-api.com/api/v2/users?size=10');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={styles.container}>
      <h1>User Cards</h1>
      <div style={styles.cardList}>
        {data.map((user, index) => (
          <div key={index} style={styles.card}>
            <img src={user.avatar_url} alt={user.first_name} style={styles.avatar} />
            <div style={styles.cardContent}>
              <h2 style={styles.name}>{user.first_name} {user.last_name}</h2>
              <p style={styles.description}>{user.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    margin: 0,
    backgroundColor: '#f7f7f7',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  cardList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  },
  card: {
    width: '250px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    textAlign: 'center',
    transition: 'transform 0.3s',
  },
  avatar: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0',
  },
  cardContent: {
    padding: '15px',
  },
  name: {
    fontSize: '1.2rem',
    margin: '10px 0',
  },
  description: {
    fontSize: '1rem',
    color: '#555',
  },
};
