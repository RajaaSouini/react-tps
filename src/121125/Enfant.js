import { useState } from "react";

function Enfant({onEnvoyerDonnee}){
    const [saisie , setSaisie] = useState("");
    const handleChange = (event)=> {
        setSaisie(event.target.value);
    }
    const handleClick= ()=>{onEnvoyerDonnee(saisie)};
    return(
        <>
            <div style={{backgroundColor : "lightblue", padding:"20px"}}>
                <h1>Composant enfant (Saisie-Emetteur)</h1>
                <input type="text" value={saisie} placeholder="Tapez un message ici"onChange={handleChange} ></input>
                <button onClick={handleClick}>Envoyer au parent</button>
            </div>
        </>
    );
};
export default Enfant;