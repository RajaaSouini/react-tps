import { useState } from "react";

function Exercice1(){
const [nom , setNom] = useState("");
const [prenom , setPrenom ] = useState("");
const [age, setAge] = useState(0);
const [message, setMessage] = useState("");

const handleClick = (e) => {e.preventDefault(); 
    setMessage(`Votre nom complet ${nom} ${prenom} Votre âge : ${age} ans`);

}
    return(
        <>
            <form onSubmit={handleClick}>
                <label>Votre nom :</label>
                <input type="text" onChange={(e)=>setNom(e.target.value)}/><br/>
                <label>Votre prénom :</label>
                <input type="text" onChange={(e)=>setPrenom(e.target.value)}/><br/>
                <label>Votre age :</label>
                <input type="number" onChange={(e)=>setAge(e.target.value)}/>
                <button type="submit">Afficher</button>
            </form>
            <div>{message}</div>
        </>
    );
}
export default Exercice1;
/*
import React, { useState } from "react";

function Exercice1() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  function afficher(e) {
    e.preventDefault(); 
    setMessage(`Votre nom complet ${nom} ${prenom} Votre âge : ${age} ans`);
  }

  return (
    <div >
      <form onSubmit={afficher}>
        <p>
          <label>Votre nom : </label>
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
        </p>

        <p>
          <label>Votre prénom : </label>
          <input
            type="text"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
          />
        </p>

        <p>
          <label>Votre âge : </label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <button type="submit">Afficher</button>
        </p>
      </form>

      <p>{message}</p>
    </div>
  );
}

export default Exercice1; */



