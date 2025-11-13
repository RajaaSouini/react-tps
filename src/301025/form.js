import React ,{useEffect, useState} from "react";

function Salutation(props){
const [nom,setNom]=useState("---")
const [prenom,setPrenom]=useState("---")
const [age,setAge]=useState(0)
function changeNom(e){
    setNom(e.target.value)
}
function changePrenom(e){
    setPrenom(e.target.value)
}
function changeAge(e){
    setAge(e.target.value)
}
useEffect(function(){document.title=nom+" "+prenom;},[])


return(
    <div>
        <label>nom:</label>
        <input type="text" value={nom} onChange={changeNom}></input>
        <label>prénom:</label>
        <input type="text" value={prenom} onChange={changePrenom}></input>
        <label>age:</label>
        <input type="text" value={age} onChange={changeAge}></input>
        <h2>Salutation</h2>
        <p>salut {nom} {prenom} vote age est:{age}</p>
    </div>
)
}
export default Salutation;