import { useState } from "react";

export default function Publication({id , auteur , contenu, onlike}){
    const handleClick = () => {
    setLike(like + 1);
    onlike(id);
    };
    const [like , setLike] = useState(0);
    
    return(<>
            <h2>{auteur}</h2>
            <p>{contenu}</p>
            <button onClick={handleClick}>J'aime</button>
    </>);
}