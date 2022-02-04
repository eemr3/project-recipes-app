import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes/Routes';
import AppProvider from './context/AppProvider';
import InprogressProvider from './context/InprogressProvider';

function App() {
  return (
    <div>
      <AppProvider>
        <InprogressProvider>
          <Routes />
        </InprogressProvider>
      </AppProvider>
    </div>
  );
}

export default App;
