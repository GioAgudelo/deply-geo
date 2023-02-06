
import React, {useState} from 'react';
import MapView from './component/MapView';
import {Icon} from "leaflet";
import { MapContainer,TileLayer } from 'react-leaflet';
import Markers from './component/Markers';
import "./App.css";
import Ubication from './component/ubication';
import Navbar from './component/Navbar/Navbar';


function App() {
  // component state
  
  return (
    <div>
      <Navbar></Navbar>
      <MapView/>
      
    </div>

    
  );
}

export default App;
