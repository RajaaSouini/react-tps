import { useState } from "react";

function Chercher(props){
    const [recherche, setRecherche] =useState("");
    function onChercherSubmitBar(e){
        e.preventDefault();
        props.chercherSub(recherche);
        
    }
    return(<>
        <form onSubmit={(e)=>onChercherSubmitBar(e)}>
            <h1>Composant ChercherBar</h1>
            <p>Entrer le mot cle de recherche</p>
            <input type="text" onChange={(e)=>{setRecherche(e.target.value)}}/>
            <button type="submit">Chercher</button>
        </form>
    </>);
}
export default Chercher;