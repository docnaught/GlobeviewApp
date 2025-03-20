import React, { useState } from 'react';
import GlobeComponent from './components/GlobeComponent';
import ControlPanel from './components/ControlPanel';
import './App.css';

function App() {
  const [globeConfig, setGlobeConfig] = useState({
    pointsData: [],
    showAtmosphere: true,
    showGraticules: false,
    globeImageUrl: '//unpkg.com/three-globe/example/img/earth-blue-marble.jpg',
    backgroundImageUrl: '//unpkg.com/three-globe/example/img/night-sky.png',
    autoRotate: true,
    autoRotateSpeed: 0.5,
  });

  const handleConfigChange = (newConfig) => {
    setGlobeConfig({ ...globeConfig, ...newConfig });
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>GlobeView App</h1>
      </header>
      <div className="app-container">
        <ControlPanel config={globeConfig} onConfigChange={handleConfigChange} />
        <div className="globe-container">
          <GlobeComponent config={globeConfig} />
        </div>
      </div>
    </div>
  );
}

export default App;