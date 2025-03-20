import React from 'react';
import './ControlPanel.css';

const ControlPanel = ({ config, onConfigChange }) => {
  const handleToggle = (key) => {
    onConfigChange({ [key]: !config[key] });
  };

  const handleSpeedChange = (e) => {
    onConfigChange({ autoRotateSpeed: parseFloat(e.target.value) });
  };

  const handleImageChange = (e) => {
    const imageOptions = {
      'blue-marble': '//unpkg.com/three-globe/example/img/earth-blue-marble.jpg',
      'dark': '//unpkg.com/three-globe/example/img/earth-dark.jpg',
      'night': '//unpkg.com/three-globe/example/img/earth-night.jpg',
    };
    onConfigChange({ globeImageUrl: imageOptions[e.target.value] });
  };

  const addRandomPoints = () => {
    const N = 20;
    const newPoints = [...Array(N).keys()].map(() => ({
      lat: (Math.random() - 0.5) * 180,
      lng: (Math.random() - 0.5) * 360,
      size: Math.random() / 3,
      color: ['red', 'blue', 'green', 'yellow', 'orange'][Math.floor(Math.random() * 5)]
    }));
    
    onConfigChange({ 
      pointsData: [...config.pointsData, ...newPoints] 
    });
  };

  const clearPoints = () => {
    onConfigChange({ pointsData: [] });
  };

  return (
    <div className="controls-panel">
      <h3>Globe Controls</h3>
      
      <div className="control-group">
        <label>
          <input
            type="checkbox"
            checked={config.showAtmosphere}
            onChange={() => handleToggle('showAtmosphere')}
          />
          Show Atmosphere
        </label>
      </div>
      
      <div className="control-group">
        <label>
          <input
            type="checkbox"
            checked={config.showGraticules}
            onChange={() => handleToggle('showGraticules')}
          />
          Show Graticules
        </label>
      </div>
      
      <div className="control-group">
        <label>
          <input
            type="checkbox"
            checked={config.autoRotate}
            onChange={() => handleToggle('autoRotate')}
          />
          Auto Rotate
        </label>
      </div>
      
      {config.autoRotate && (
        <div className="control-group">
          <label>
            Rotation Speed:
            <input
              type="range"
              min="0.1"
              max="5"
              step="0.1"
              value={config.autoRotateSpeed}
              onChange={handleSpeedChange}
            />
            {config.autoRotateSpeed.toFixed(1)}
          </label>
        </div>
      )}
      
      <div className="control-group">
        <label>
          Earth Texture:
          <select onChange={handleImageChange}>
            <option value="blue-marble">Blue Marble</option>
            <option value="dark">Dark</option>
            <option value="night">Night</option>
          </select>
        </label>
      </div>
      
      <div className="button-group">
        <button onClick={addRandomPoints}>
          Add Random Points
        </button>
        <button onClick={clearPoints}>
          Clear Points
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;