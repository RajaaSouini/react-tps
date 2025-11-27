import { useState } from "react";
import Publication from "./Publication";
export default function App(){
    const publications = [
    {
      id: 1,
      auteur: "Sara",
      contenu: "Une ville magnifique peinte en bleu. Je recommande !"
    },
    {
      id: 2,
      auteur: "Yassine",
      contenu: "Les hooks facilitent beaucoup le développement React."
    },
    {
      id: 3,
      auteur: "Rajae",
      contenu: "Travaillez un peu chaque jour et vous allez avancer !"
    }
  ];
  const [totalLikes, setTotalLikes] =useState(0);
  const [data , setData] = useState([]);
    function incrementerLike(id){
        setTotalLikes(totalLikes + 1);
        setData([...data, id]);
    }
    return (<>
        <h1>Fil d'actualités</h1>
        <div>
            <h2>Résumé des j aime </h2>
            <p>nombre de j aime :{totalLikes}</p>
            <p>id des personnes :{data.join(',')} </p>
        </div>
        {publications.map((pub)=> (<Publication id={pub.id} auteur= {pub.auteur} contenu= {pub.contenu} onlike = {incrementerLike}  />))}
    </>);
}