import React, { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import './GlobeComponent.css';

const GlobeComponent = ({ config }) => {
  const globeEl = useRef();
  const [countries, setCountries] = useState({ features: [] });
  const [hoverD, setHoverD] = useState();

  useEffect(() => {
    // Load country data
    fetch('https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
      .then(res => res.json())
      .then(data => {
        setCountries(data);
      });
  }, []);

  useEffect(() => {
    // Apply auto-rotation settings
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = config.autoRotate;
      globeEl.current.controls().autoRotateSpeed = config.autoRotateSpeed;
      
      // Initial camera position
      if (!globeEl.current.cameraPosition) {
        globeEl.current.pointOfView({
          lat: 39.6,
          lng: -98.5,
          altitude: 2
        });
      }
    }
  }, [config.autoRotate, config.autoRotateSpeed]);

  return (
    <div className="globe-component">
      <Globe
        ref={globeEl}
        width={800}
        height={600}
        globeImageUrl={config.globeImageUrl}
        backgroundImageUrl={config.backgroundImageUrl}
        
        // Atmosphere
        atmosphereColor="lightskyblue"
        atmosphereAltitude={0.15}
        showAtmosphere={config.showAtmosphere}
        
        // Graticules
        showGraticules={config.showGraticules}
        
        // Countries polygons
        polygonsData={countries.features}
        polygonAltitude={0.01}
        polygonCapColor={d => d === hoverD ? 'rgba(255, 100, 100, 0.8)' : 'rgba(200, 200, 200, 0.7)'}
        polygonSideColor={() => 'rgba(100, 100, 100, 0.15)'}
        polygonStrokeColor={() => '#111'}
        polygonLabel={({ properties: d }) => `
          <b>${d.ADMIN} (${d.ISO_A2})</b> <br />
          Population: <i>${d.POP_EST.toLocaleString()}</i>
        `}
        onPolygonHover={setHoverD}
        polygonsTransitionDuration={300}
        
        // Points data
        pointsData={config.pointsData}
        pointColor={d => d.color || 'red'}
        pointAltitude={0.07}
        pointRadius={0.5}
        pointsMerge={true}
      />
    </div>
  );
};

export default GlobeComponent;