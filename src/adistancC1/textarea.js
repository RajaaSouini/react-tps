import { useState } from "react";

function Textarea() {
    const [text, setText] = useState("");
    const compteur = text.length;

    return (
        <>
            <h1>Testez votre textarea</h1>
            <p>Entrez du texte ci-dessous pour voir le compteur et l'affichage en direct :</p>
            <form>
                <textarea onChange={(e) => setText(e.target.value)} ></textarea>
            </form>
            <div>Le nombre de caractères est : {compteur}</div>
            <p>Le texte saisi est :{text} </p>
        </>
    );
}

export default Textarea;
