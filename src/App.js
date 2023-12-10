import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';

import Home from './components/Home'
import Number from './components/Number'
import Word from './components/Word'
import ColorWord from './components/ColorWord'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/:number" element={<Number />} />
          <Route path="/:word" element={<Word />} />
          <Route path="/:word/:textColor/:bgColor" element={<ColorWord />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App
