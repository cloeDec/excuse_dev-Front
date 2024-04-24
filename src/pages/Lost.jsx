import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LostPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirect = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(redirect);
  }, [navigate]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>I'm lost</h1>
      <iframe src="https://giphy.com/embed/d2jjuAZzDSVLZ5kI" width="480" height="480" ></iframe><p><a href="https://giphy.com/gifs/lidl-voyages-confused-lost-d2jjuAZzDSVLZ5kI"></a></p>
    </div>
  );
};

export default LostPage;

