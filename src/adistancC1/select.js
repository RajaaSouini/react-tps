import { useState } from "react";

function UtilisationSelect() {
    const [commande, setCommande] = useState(""); 
    const [selection, setSelection] = useState(""); 
    const Drinks = [
        { value: 'coffee', label: 'Café' },
        { value: 'jus', label: 'Jus' },
        { value: 'the', label: 'Thé' },
        { value: 'soda', label: 'Soda' }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selection) {
            setCommande(selection); 
        }
    };

    return (
        <>
            <h1>Passer une commande :</h1>
            <form onSubmit={handleSubmit}>
                <label>Choisissez votre boisson :</label><br />
                <select value={selection} onChange={(e) => setSelection(e.target.value)}>
                    <option value="">Sélectionnez</option>
                    {Drinks.map((drink, index) => (
                        <option key={index} value={drink.label}>{drink.label}</option>
                    ))}
                </select><br /><br />
                <button type="submit">Commander</button>
            </form>
            {commande &&( <div> votre commande est : {commande}</div>)}
        </>
    );
}

export default UtilisationSelect;


