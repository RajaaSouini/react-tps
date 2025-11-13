import React from "react";
const ville = ["Meknes", "Rabat", "Safi", "Tanger", "Fes"];
const style= {
    color: "lightBlue"
}

export default class C4Class extends React.Component(){
   render(){
     return(
        <div>
            <h1 style={style}>Test composant4 :</h1>
            <p>Villes :</p>
            <select>
               {
                ville.map(function(vil, index){return <option key={index}>{vil}</option>})
               }
            </select>
        </div>
    );
   }
}
