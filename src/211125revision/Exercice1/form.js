import { useState } from "react";

function FormulaireEx1(){
    const pays= ["Maroc" , "France" , "Italie" , "Chine"];
    const activites = ["Inormatique ", "Gestion " , "Pédagogie"];
    const [nom , setNom] = useState("");
    const [email , setEmail] = useState("");
    const [genre , setGenre] = useState("");
    const [countries , setCountries] =useState(pays[0]);
    const [afficher, setAfficher] = useState(false);
    const [activite , setActivite] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setAfficher(true);
    };
    const handleChangeActivites = (event)=>{
        const value = event.target.value;
        const isChecked = event.target.checked ;
        if (isChecked) {
            setActivite([...activite , value]);
        }else {setActivite(activite.filter((act)=> act !== value))}
    }


    return(
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Formulaire d'inscription :</legend>
                    <label>Nom :</label><input type="text" value={nom} onChange={(e) => setNom(e.target.value)} /><br/>
                    <label>E-mail :</label><input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
                    <label>Sexe :</label>
                    <label>Masculin <input  type="radio" name="genre" value="Homme" onChange={(e)=>setGenre(e.target.value)} /></label>
                    <label>Feminin <input  type="radio" name="genre" value="Femme" onChange={(e)=> setGenre(e.target.value)} /></label><br/>
                    <label>Pays :</label><select onChange={(e)=> setCountries(e.target.value)} >{pays.map(function(pay, index){return <option key={index}>{pay}</option>})}</select><br/>
                    <label>Domaines d'activités :</label>{activites.map(function (data, index) {return (<label key={index}><input type="checkbox"name={data}
                value={data} onChange={handleChangeActivites}/>{data}<br /></label>);
        })}

                    <button type="submit">Envoyer</button><button type="reset" onClick={() => {setNom("") ;setEmail("");setGenre("");setCountries(pays[0])}}>Annuler</button>
                </fieldset>
            </form>
            {afficher && <p>Nom : {nom} , Email : {email} , Sexe : {genre} , Pays : {countries} , Domaines d'activités : {activite}</p>}
        </>
    );
}
export default FormulaireEx1;