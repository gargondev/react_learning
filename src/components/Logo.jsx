import React from "react";

/**
 * @description Function Logo é um component que exporta a imagem dentro de ./img/
 * @returns img 
 */
function Logo(){
    return (
       <img src={require("./img/logo-topo.png")} alt="" srcset="" />
    );
}


export default Logo