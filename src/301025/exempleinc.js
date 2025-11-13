import React, { useEffect, useState } from "react";
function Compteur(){
const [valeur,setValeur]=useState(0)
function incrementer(){setValeur(valeur+1)}
function decrementer(){setValeur(valeur-1)}
useEffect(()=>{console.log(valeur)})
return(
    <div>
        <h1>compteur: {valeur}</h1>
        <input type="button" value="incrementer" onClick={incrementer}/>
        <input type="button" value="decrementer" onClick={decrementer}/>
    </div>)
}
export default Compteur;