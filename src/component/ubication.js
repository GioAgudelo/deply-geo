import React from "react";
import { Marker } from "react-leaflet";
import { IconLocation } from "./IconLocalotation";

export default function Ubication(){
    
    const position = [4.0938639744413035, 
        -76.20567416272246];
    
    const position2 = [4.087030517496334, 
        -76.19015881259004];

    return(
        
        <div>
          <Marker position={position} icon= {IconLocation}> </Marker>
          <Marker position={position2} icon= {IconLocation}> </Marker>   
        </div>
    )
};

