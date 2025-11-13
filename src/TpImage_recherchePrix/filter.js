import { useState } from "react";
import styled from "styled-components";
const Div = styled.div`
    width : 600px;
    margin: 0 auto;
    padding : 100px;
    background-color: lightblue;
`;

function Filter({list , filterPrix}){
    const [prixMin , setPrixMin] =useState(0);
    const [prixMax , setPrixMax] = useState(0);

    const Recherche = list.filter(
    (l) => l.prix >= prixMin && l.prix <= prixMax
  );
    const handleClick = () =>{
        filterPrix(Recherche);
    }

    const handleChange1 = (e) =>{
        setPrixMin(e.target.value);
    }
    const handleChange2 = (e) =>{
        setPrixMax(e.target.value);
    } 
    return(<>
        <Div>
            <h1>Filtrer par prix :</h1>
            <label>Prix minimum :</label>
            <input type="number" value={prixMin} onChange={handleChange1}></input><br/>
            <label>Prix maximum :</label>
            <input type="number" value={prixMax} onChange={handleChange2}></input>
            <button onClick={handleClick}>Chercher</button>
        </Div>
    </>);
}
export default Filter;