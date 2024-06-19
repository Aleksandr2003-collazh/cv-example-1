import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        setPosts(json)
      })
  }, []);

  return (
    <div style={{ overflowY: 'auto', maxHeight: '100%' }}>
      {posts.map(({ title, body, id }, i) => (
        <div key={i} style={{ border: 'solid black 1px', padding: '5px', margin: '3px' }}
          onClick={() => navigate(`./${id}`)}
        >
          <h3 style={{ fontSize: '1.5rem' }}>{title}</h3>
          <p>{body}</p>
        </div>
      ))}
    </div>
  );
}
