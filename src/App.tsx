// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Home';

export default function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
  );
}
