import {useState} from "react";
function Couleur (props){
    const [color , setColor] = useState("red");
    function Changer(){
        setColor(color === "red" ? "green" : "red");
    }
    return(
        <>
        <div style={{height : props.height , width : "100px" , backgroundColor : color}}></div>
        <button onClick={Changer}>Change</button>
        </>
    );
}
export default Couleur;
/*
import { useState } from "react";

function Couleur(props){
    const[color, setColor]=useState("red");
    function Changer(){
        setColor(color === 'red'? 'green': 'red');
    }

    return(
        <>
            <div style={{height:"400px ",width:props.width, backgroundColor : color, margin: "10px"}}></div>
            <button onClick={Changer}>Change la couleur</button>
        </>
    );
}
export default Couleur;  */