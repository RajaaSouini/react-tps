import { useState } from "react";

function Form(){
    const [nom , setNom] =useState("");
    const [prenom , setPrenom]= useState("");
    const [info , setInfo] = useState();

    function envoyer (){
        setInfo(`nom : ${nom} prenom : ${prenom}`)
    }
    return(<>
            <label>Nom:</label>
            <input type="text" value={nom} onChange={(e)=>{setNom(e.target.value)}} />
            <label>Prénom :</label>
            <input type="text" value={prenom} onChange={(e)=>{setPrenom(e.target.value)}}/>
            <button onClick={envoyer}>click</button>
            <p>{info}</p>
    </>);
}
export default Form ;