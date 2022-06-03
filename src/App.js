import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Counter from './features/counter/Couter'
import Posts from './pages/Posts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Counter/>}/>
        <Route exact path="/posts" element={<Posts/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
