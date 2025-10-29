import { useState } from "react";
const Information = ["Identifiant","Mot de passe", "Date de naissance","Ville","Genre","Loisirs","Photo"];

    const Villes = ["Casablanca", "Safi", "Agadir", "Meknès"];
    const Loisirs = ["Sport", "Peinture", "Musique"];
function Formulaire1() {
    const [identifiant, setIdentifiant] = useState("");
    const [motdepasse, setMotdepasse] = useState("");
    const [dateNaissance, setDateNaissance] = useState("");
    const [ville, setVille] = useState(Villes[0]);
    const [genre, setGenre] = useState("");
    const [loisir, setLoisir] = useState([]);
    const [afficher, setAfficher] = useState(false);
    const handleLoisirChange = (e) => {
    const valeur = e.target.value;
    if (e.target.checked) {
      setLoisir([...loisir, valeur]);
    } else {
      setLoisir(loisir.filter((l) => l !== valeur));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAfficher(true);
  };

  return (
    <>
      <h1>Inscription :</h1>
      <form onSubmit={handleSubmit}>
            {Information[0]}<input type="text" onChange={(e) => setIdentifiant(e.target.value)} /><br/>
            {Information[1]}<input type="password" onChange={(e) => setMotdepasse(e.target.value)}/><br/>
            {Information[2]}<input type="date" onChange={(e) => setDateNaissance(e.target.value)}/><br/>
            {Information[3]}<select onChange={(e) => setVille(e.target.value)}>{Villes.map((vil, index) => (<option key={index}>{vil}</option>))}</select><br/>
            {Information[4]}<label> <input name="genre" type="radio"onChange={(e) => setGenre(e.target.value)} /> Homme</label>
                <label><input name="genre" type="radio"onChange={(e) => setGenre(e.target.value)} /> Femme</label><br/>
            {Information[5]}{Loisirs.map((loi, index) => (<label key={index}><input value={loi} type="checkbox" onChange={handleLoisirChange}/> {loi}</label>))}<br/>
            {Information[6]}<input type="file" />
            <br/>
            <button  type="submit" >S'inscrire</button>
      </form>
      {afficher && <p>Je suis {identifiant} , né le {dateNaissance} à {ville}  et mes loisirs sont : {loisir}</p>}
      
    </>
  );
}

export default Formulaire1;
