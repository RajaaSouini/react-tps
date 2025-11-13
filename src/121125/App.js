import { useState } from "react";
import Enfant from "./Enfant";
const myStyle = {backgroundColor : "lightgray", padding : "20px"}
function App(){
    const [messageRecu , setMessageRecu] = useState('En attente de message ...');
    const gererMessage = (donnedeEnfant) => {setMessageRecu(`Message recu : ${donnedeEnfant}`)};
    return(
        <>
            <div style={myStyle}>
                <h1>Composant parent (Récepteur)</h1>
                Etat du parent : {messageRecu}
                <Enfant onEnvoyerDonnee = {gererMessage}/>
            </div>
        </>
    );
}
export default App;