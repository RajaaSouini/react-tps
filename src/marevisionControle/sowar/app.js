import Recherche from "./recherche";
import Affichage from "./affichage";
import { useState } from "react";
const list = [
  { "id": 1, "name": "الفاتحة", "type": "meccan", "totales_verses": 7 },
  { "id": 2, "name": "البقرة", "type": "medinan", "totales_verses": 286 },
  { "id": 3, "name": "ال عمران", "type": "medinan", "totales_verses": 200 },
  { "id": 4, "name": "النساء", "type": "medinan", "totales_verses": 176 },
  { "id": 5, "name": "المائدة", "type": "medinan", "totales_verses": 120 },
  { "id": 6, "name": "الانعام", "type": "meccan", "totales_verses": 165 },
  { "id": 7, "name": "الاعراف", "type": "meccan", "totales_verses": 206 },
  { "id": 8, "name": "الانفال", "type": "medinan", "totales_verses": 75 },
  { "id": 9, "name": "التوبة", "type": "medinan", "totales_verses": 129 },
  { "id": 10, "name": "يونس", "type": "meccan", "totales_verses": 109 },
  { "id": 11, "name": "هود", "type": "meccan", "totales_verses": 123 },
  { "id": 12, "name": "يوسف", "type": "meccan", "totales_verses": 111 }
];
function App(){
    const [data , setData] = useState([]);
    function onChercher(number1, number2){
        setData(list.filter(
        (l) => l.totales_verses >= number1 && l.totales_verses <= number2))
    }
    return(<>
        <h1>البحث على السزر حسب عدد الايات </h1>
        <Recherche onchercherSub = {onChercher}/>
        <Affichage result = {data}/>
    </>);
}
export default App;