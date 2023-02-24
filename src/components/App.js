import React from 'react';
import Greeting from './Greeting';
import {Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/greeting" element={<Greeting />} />
        </Routes>
    </div>
  );
}

export default App;
