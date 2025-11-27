import { useState } from "react";

function Form(){
    const [nom , setNom] =useState("");
    const [prenom , setPrenom]= useState("");
    const [info , setInfo] = useState();

    function envoyer (e){
        e.preventDefault();
        setInfo(`nom : ${nom} prenom : ${prenom}`)
    }
    return(<>
            <form onSubmit={envoyer}>
                <label>Nom:</label>
                <input type="text" value={nom} onChange={(e)=>{setNom(e.target.value)}} />
                <label>Prénom :</label>
                <input type="text" value={prenom} onChange={(e)=>{setPrenom(e.target.value)}}/>
                <button type="submit">click</button>
                <p>{info}</p>
            </form>
    </>);
}
export default Form ;