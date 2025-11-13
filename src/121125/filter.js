import { useState } from "react";
function Filter({list,filterAya }){
    const [saisie1 , setSaisie1] = useState(0);
    const [saisie2 , setSaisie2] = useState(0);

    const handleChange1 = (e)=> {
        setSaisie1(e.target.value);
    }
    const handleChange2 = (e)=>{
        setSaisie2(e.target.value);
    }
    const Recherche = list.filter(l=>l.totales_verses >=saisie1 && l.totales_verses<= saisie2);
    const handleClick=()=>{
        filterAya(Recherche);
    }
    return(<>
        <div style={{backgroundColor : "lightblue" , marginTop: "100px" ,padding:"100px"}}>
            <h1>البحث على السور حسب عدد الايات </h1>
            <input type="number" value={saisie1} name="min" onChange={handleChange1}></input>
            <br/>
            <input type="number" value={saisie2} name="max" onChange={handleChange2}></input><br/>
            <button onClick={handleClick} >بحث</button>
        </div>
    </>)
}
export default Filter ;