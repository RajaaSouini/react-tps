import { useState } from "react";

function Identifiant() {
    const [id, setId] = useState("");
    const [mdp, setMdp] = useState("");
    const identifiant = "user";
    const motpasse = "1234";
    const [messageId, setMessageId] = useState("");
    const [messageMdp, setMessageMdp] = useState("");
    const [estConnecte, setEstConnecte] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        if (id !== identifiant) {
           setMessageId("Votre identifiant est incorrect");
        }
        if (mdp !== motpasse) {
           setMessageMdp("Votre mot de passe est incorrect");
        }
        if (id === identifiant && mdp === motpasse) {
            setEstConnecte(true);
        }
    };

    if (estConnecte) {
        return (
            <div style={{ textAlign: "center", marginTop: "50px" }}>
                <h1>Accueil</h1>
                <p>Bonjour {identifiant}</p>
            </div>
        );
    }

    return (
        <>
            <h1>Connexion</h1>
            <form onSubmit={handleClick}>
                <label>L'identifiant</label><br />
                <input type="text" onChange={(e) => setId(e.target.value)} /><br />
                <div>{messageId}</div>

                <label>Mot de passe</label><br />
                <input type="password" onChange={(e) => setMdp(e.target.value)} /><br />
                <div>{messageMdp}</div>

                <button type="submit">Se connecter</button>
            </form>
        </>
    );
}

export default Identifiant;
