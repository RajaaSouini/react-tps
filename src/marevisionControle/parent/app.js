import { useState } from "react";
import Chercher from "./chercher";
import List from "./list";
const list=[
        {  name: "Pomme", type: "Fruit" },
        {  name: "Banane", type: "Fruit" },
        {  name: "Carotte", type: "Légume" },
        {  name: "Tomate", type: "Légume" },
    ];
function App(){
    const [result , setResult] = useState([]);
    function onChercherSubmit(type){
        setResult(list.filter((item) =>item.type == type));
    }
    return(<>
    <h1>Composant App</h1>
    <Chercher chercherSub = {onChercherSubmit}/>
    <List resultat= {result}/>

    </>);
}
export default App;