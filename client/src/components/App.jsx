import React from 'react';
import { ActionsProvider } from '../contexts/ActionsContext';
import { useAuthActions } from '../store/auth/useAuthActions';

function App() {
  const authActions = useAuthActions();
  return (
    <ActionsProvider value={{ authActions }}>
      <h1>Hello World</h1>
    </ActionsProvider>
  );
}

export default App;
