// App.js
import React from 'react';
import GalaxyCanvas from '../../Rootcomponent/Galaxy/page';
import Main from '../../Rootcomponent/Main/page';
const App = () => {
  return (
    <div style={{ height: '100vh', width: '100vw',display:'flex' }}>
      <GalaxyCanvas />
      <Main/>
    </div>
  );
};

export default App;
