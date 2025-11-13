import React ,{useEffect, useState} from "react";
function Salutation(props){
const [nom,setNom]=useState("Rami")

function changeNom(e){
setNom(e.target.value)
}
useEffect(()=>{document.title=nom;},[nom])
return(
    <div>
        <input type="text" value={nom} onChange={changeNom}></input>
        <h2>Salutation</h2>
        <p>salut {nom} </p>
    </div>
)
}
export default Salutation;