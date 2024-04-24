import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h1>Oops! Page Not Found</h1>
      <p>Retourner à la page d'<Link to="/">accueil </Link>.</p>
    </div>
  );
};

export default NotFoundPage;
