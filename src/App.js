import React, { useEffect, useState, useRef } from 'react';
import './App.css';
// COMPONENTS
import MyResponsiveChoropleth from './nivo-geomap/nivo-geomap';
import D3WorldMap from './d3-worldmap/d3_world_map';
import Dashboard from './dashboard/dashboard';
// import Map from './d3-react-map/d3-react-map';

function App() {

  return (
    <div>
      {/* <D3WorldMap /> */}
      <Dashboard />
    </div>
  );
}

export default App;
