import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Greeting from './Greeting';

const App = () => (
  <div>
    <Routes>
      <Route path="/greeting" element={<Greeting />} />
    </Routes>
  </div>
);

export default App;
