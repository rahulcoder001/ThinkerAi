// App.js
import React from 'react';
import GalaxyCanvas from '../components/Galaxy/page';
import Main from '../components/Main/page';
const App = () => {
  return (
    <div style={{ height: '100vh', width: '100vw',display:'flex' }}>
      <GalaxyCanvas />
      <Main/>
    </div>
  );
};

export default App;
