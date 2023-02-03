import React,{useEffect,useState} from "react";
import { helpHttp } from "../helpers/helpHttp";
import { Marker } from "react-leaflet";
import { IconLocation } from "./IconLocalotation";
import { render } from "@testing-library/react";
import Ubication from "./ubication";


const CrudApi = () =>{


    const[db,setDb] = useState([]);
    const[dataToEdit,setDataToEdit] = useState(null);

    let api = helpHttp();
    let url = "http://localhost:5000/places";

    const dir = [4.09386,-76.2056];

    useEffect(() =>{
        
        api.get(url).then((res) =>{
            res.map((e) =>{
                <Ubication data={res}></Ubication>
            } )
            
        });
    },[]);
    
}

export default CrudApi;