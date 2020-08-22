import React from 'react';
import { Card } from './components';

export const App = () => {
  console.log('==renderApp');

  return (
    <div>
      <input type='' />
      <h2>Hello, 世界 2020 </h2>
      <Card size={16} />
    </div>
  );
};

export default App;
