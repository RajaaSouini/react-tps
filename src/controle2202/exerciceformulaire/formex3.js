import { use, useState } from "react";

function FormEx3(){
    const [email , setEmail] = useState("");
    const [sujet , setSujet ]= useState("");
    const [area , setArea] = useState("");
    const[choix, setChoix] = useState();
    const [choix2 , setChoix2] =useState([]);
    function Afficher(){
        alert(`le sujet : ${sujet} , l email est ${email} et le message est ${area} le choix est ${choix} and ${choix2.join(',')}`);
    }
    function handleSubmit(e){
        e.preventDefault();
        Afficher();

    }
    const handleChange = (e) => {
    if (e.target.checked) {
      setChoix2([...choix2, e.target.value]);
    } else {
      setChoix2(choix2.filter((m) => m !== e.target.value));
    }
  };
    return(<>
        <h1>Contactez-nous</h1>
        <form onSubmit={handleSubmit}>
            <label>Sujet</label>
            <input type="text" value={sujet} onChange={(e)=>{setSujet(e.target.value)}}/><br/>
            <label>Email</label>
            <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br/>
            <label>Votre status</label><br/>
            <label>Etudiant<input type="radio" name="status" value="Etudiant" onChange={(e)=> setChoix(e.target.value)}/></label>
            <label>Professionnelle <input type="radio" name="status" value="prof" onChange={(e)=>{setChoix(e.target.value)}}/></label>
            <label>Autre<input type="radio" name="status" value="autre" onChange={(e)=>{setChoix(e.target.value)}}/></label><br/>
            <label>Préférences :</label>
            <label><input type="checkbox" name="abboner" value="abonner" onChange={handleChange}/>S'abonner</label>
            <label><input type="checkbox" name="offre" value="offre" onChange={handleChange}/>Reccevoir des offres</label><br/>
            <label>Message</label>
            <textarea
                value={area}
                onChange={(e) => setArea(e.target.value)}
                rows="4"
                cols="40"
            ></textarea>
            <button type="submit">Envoyer</button>
        </form>

    </>);
}
export default FormEx3;