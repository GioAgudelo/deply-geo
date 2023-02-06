import React, {useEffect, useState} from 'react';
import { MapContainer, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import "../App.css";
import Markers from './Markers';
import Ubication from './ubication';
import places from '../acces/data.json'
import CrudApi from './CrudApi'
import Navbar from './Navbar/Navbar';



const MapView = () =>{
  const datos = [4.0896, -76.2072];
  const datos1 = [4.09386, -76.20567];
  const URL = "http://localhost:5000/places";

  const [todos, setTodos] = useState()

  const fetchApi = async () => {
    const response = await fetch(URL);
    const myJson = await response.json()
    setTodos(myJson)
  }
  useEffect(() =>{
    fetchApi();
  },[])

  return (
    <div className='content_map'>
    <MapContainer center={{lat:'4.085',lng:'-76.19319'}} zoom={14}>
        <TileLayer         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
    <Ubication></Ubication>
    </MapContainer>  
      
    
    </div>
  );

};

export default MapView;