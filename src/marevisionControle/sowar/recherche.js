import { useState } from "react";

function Recherche(props){
    const[number1 , setNumber1] = useState(0);
    const [number2 , setNumber2] = useState(0);
    const handleSubmit = (e)=>{
        e.preventDefault();
        props.onchercherSub(number1,number2)
    }
    return(<>
    <h1>عدد الايات محصور بين </h1>
    <form onSubmit={handleSubmit}>
        <input type="number" value={number1} onChange={(e)=>{setNumber1(e.target.value)}}/>
        <input type="number" value={number2} onChange={(e)=>{setNumber2(e.target.value)}}/>
        <button type="submit">البحث</button>
    </form>
    </>);
}
export default Recherche;
