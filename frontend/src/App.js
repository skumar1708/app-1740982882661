import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SoundBoard from './pages/SoundBoard';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <SoundBoard />
      <Footer />
    </div>
  );
}

export default App;