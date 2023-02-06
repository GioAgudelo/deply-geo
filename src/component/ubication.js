import React, { Component,useEffect } from "react";
import { Marker, Popup } from "react-leaflet";
import { IconLocation } from "./IconLocalotation";

export class Ubication extends Component{
    
    constructor(props){
        super(props);

        this.temTrans1 = this.temTrans1.bind(this);
        this.temTrans2 = this.temTrans2.bind(this);

        this.state ={
         temperatura1 : 28.7,
         temperatura2: 29.2,
         position : [4.0938639744413035, -76.20567416272246],
         position2 : [4.087030517496334, -76.19015881259004],
         
        }

        setInterval(() =>{
            this.temTrans1();
            this.temTrans2();
        },60000)
    }
   

    //let intervalID = setInterval(intervalo,10000);
    // //let imprimirInterval = setInterval(console.log(intervalID),5000);

    
    
        
     temTrans1() {
            let tem = (Math.random() *(30 - 28 +1) + 28).toFixed(2);
            this.setState({
                temperatura1 : tem
            })
    
        };
    
        temTrans2() {
            let tem2 = (Math.random() *(30 - 28 +1) + 28).toFixed(2);
            this.setState({
                temperatura2 : tem2
            })
    
        };
    
    
    render(){
    return(
        
        <div>
            <Marker  position={this.state.position} icon= {IconLocation} >
                <Popup  >
                    <b>Transformador 1</b>
                    <br></br>
                    <b>Temperatura: {this.state.temperatura1}</b>
                    <br></br>
                   {/* <button onClick={this.temTrans1}>Actualizar Temperatura</button>*/}
                </Popup>
        
            </Marker>
            <Marker position={this.state.position2} icon= {IconLocation}> 
                <Popup  >
                    <b>Transformador 2</b>
                    <br></br>
                    <b>Temperatura: {this.state.temperatura2}</b>
                    <br></br>
                  {/*  <button onClick={this.temTrans2}>Actualizar Temperatura</button>*/}
                </Popup>
            </Marker>   
        </div>
    );
}
};

export default Ubication;

