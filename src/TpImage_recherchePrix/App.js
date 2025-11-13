import { useState } from "react";
import styled from "styled-components";
import Filter from "./filter";
import Affichage from "./Affichage";
const Title = styled.h1`
    color : gray;
    font-family : cursive;
    font-size: 30px;
    text-align : center;
    `;

const listImages = [
  { img: "/ImagesTpRecherchePrix/capuche.png", name : "capuche" , prix : 150 },
  { img: "/ImagesTpRecherchePrix/ensemble.jfif", name : "ensemble" , prix : 400 },
  { img: "/ImagesTpRecherchePrix/enssemble.png" , name: "ensemble" , prix : 350 },
  { img: "/ImagesTpRecherchePrix/jacket.jfif" , name : "jacket " , prix : 500 },
  { img: "/ImagesTpRecherchePrix/pantalon.png" , name : "pantalon " , prix : 200 },
  { img: "/ImagesTpRecherchePrix/scarf.jfif", name : "Scarf" , prix : 90 }
];


function App(){
    const [listFiltre, setFiltre] = useState(listImages);
    
      const handleMessageEnfant = (data2) => {
        setFiltre(data2);
      };
    return(<>
        <Title>Votre boutique de vetements </Title>
        <Filter list = {listImages} filterPrix={handleMessageEnfant}/>
        <Affichage list = {listFiltre}/>
    </>);
}
export default App;