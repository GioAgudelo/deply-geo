import React from "react";

/*const mensaje = () =>{
    return(
        <p>Componente</p>
    );
};*/

const Mensaje = props => {
    return(
        <h>{props.msg}</h>
    )

};

export default Mensaje;