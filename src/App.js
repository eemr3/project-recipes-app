import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes/Routes';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <div>
      <AppProvider>
        <Routes />
      </AppProvider>
    </div>
  );
}

export default App;
