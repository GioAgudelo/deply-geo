import React, {useEffect, useState} from "react";
import { Marker } from "react-leaflet";
import { IconLocation } from "./IconLocalotation";


function Lugares(){
    const [places, setPlaces] = useState([])
  
    useEffect(() =>{
      fetch('../acces/data.json')
      .then(response => response.json())
      .then(response => {
        setPlaces(response)
      })
    },[])
    return places;
  };

  function db(){
    const dataDb = [
    
          
          {
              "name": "Trasformador 1",
              "localization":[
                  4.0938639744413035, 
                  -76.20567416272246
              ]
          },
          {
              "name": "Trasformador 2",
              "localization":[
                  4.087030517496334, 
                  -76.19015881259004
              ]
          },
          {
              "name": "Trasformador 3",
              "localization":[
                  4.0896336093761985, 
                  -76.20727380444534
              ]
          }
      ]
  
  console.log(dataDb);
  return db;
  }
export default function Paint(){
    const data = Lugares();
    console.log(data);
   
}

    

