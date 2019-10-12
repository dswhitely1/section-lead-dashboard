import React, { useState, useEffect } from 'react';

function LoginRegister({ match: { url } }) {
  const [isRegister, setIsRegister] = useState(false);
  useEffect(() => {
    if (url === '/register') {
      setIsRegister(true);
    } else {
      setIsRegister(false);
    }
  }, [url]);
  return <h1>{isRegister ? 'Register' : 'Login'}</h1>;
}

export default LoginRegister;
