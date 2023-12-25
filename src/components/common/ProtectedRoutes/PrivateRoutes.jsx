// import { Outlet, Navigate } from 'react-router-dom';

// const PrivateRoutes = () => {
//   let auth = { token: false };
//   return auth.token ? <Outlet /> : <Navigate to='/' />;
// };

// export default PrivateRoutes;

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function PrivateRoutes(props) {
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    const login = localStorage.getItem('login');
    if (!login) {
      navigate('/');
    }
  }, []);

  return (
    <div>
      <Component />
    </div>
  );
}

export default PrivateRoutes;
