import { useState } from "react";


function RadioButton() {
    const [choix, setChoix] = useState(""); 
    const [message, setMessage] = useState(""); 
    const array = ["virements bancaires", "paiement à la livraison", "Retrait en magazin"];

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(choix);
    };

    return (
        <>
            <h1>Choisissez votre mode de paiement :</h1>
            <form onSubmit={handleSubmit}>
                {array.map(function(msg , index)
                {return<label><input type="radio" value={msg} name="payer" key={index} onChange={(e)=>setChoix(e.target.value)}></input>{msg}<br/></label>})}
                
                <br /><br />
                <button type="submit">Valider votre choix : {choix}</button>
            </form>

            {message && <div style={{backgroundColor : "lightblue" , width:"300px", margin: "10px"}}>Vous avez choisi : {message}</div>}
        </>
    );
}

export default RadioButton;
