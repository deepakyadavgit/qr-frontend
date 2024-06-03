// frontend/src/components/Logout.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Perform logout logic (e.g., clear tokens, session storage)
    localStorage.removeItem('token');
    navigate('/login');
  }, [navigate]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Logging Out...</h2>
    </div>
  );
};

export default Logout;
