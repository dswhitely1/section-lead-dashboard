import { useState } from 'react';

export const useLocalStorage = keyName => {
  const [key] = useState(keyName);
  const testLocalStorage = () => {
    if (localStorage.getItem(key)) {
      return true;
    }
    return false;
  };
  const getLocalStorage = () => localStorage.getItem(key);
  const setLocalStorage = value => localStorage.setItem(key, value);
  const delLocalStorage = () => localStorage.removeItem(key);

  return {
    testLocalStorage,
    getLocalStorage,
    setLocalStorage,
    delLocalStorage,
  };
};
