import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

let debounceTimer;
export const debounce = (func, delay) => {
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
};

export const useDebounce = (value, delay = 1000) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};

export const checkTokenValidity = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  if (token) {
    try {
      const decoded = jwt_decode(token);
      const currentTime = Date.now() / 1000;

      if (decoded.exp < currentTime) {
        // Token is expired, perform logout or refresh token
        navigate('/');
        localStorage.clear();
        console.log('Token expired');
      } else {
        // Token is valid
        console.log('Token is valid');
      }
    } catch (error) {
      // Token is not valid
      console.log('Token is not valid');
    }
  } else {
    // No token found, user is not authenticated
    console.log('No token found');
  }
};
