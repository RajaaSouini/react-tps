import { useState } from "react";

function MotdePasse() {
  const [mdp, setMdp] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const valeur = e.target.value;
    setMdp(valeur);

    if (valeur.length < 6) {
      setMessage("le mot de passe doit avoir au moins 6 caractere");
    } else{
        setMessage("");
    }
  };

  return (
    <>
      <form>
        <label>Entrer votre mot de passe :</label>
        <input type="password"  onChange={handleChange}/>
        <div>
          {message}
        </div>
      </form>
    </>
  );
}

export default MotdePasse;

/*import { useState } from "react";

function MotdePasse(){
const [mdp, setMdp] = useState("");
const [message, setMessage] =useState("");

    return(<>
        <form>
            <label>Entrer votre mot de passe :</label>
            <input onChange={(e)=>setMdp(e.target.value) } value={mdp} type="password"/>
            <div onChange={function Erreur(){
                if (mdp.length < 6){
                    setMessage("Le mot de passe doit avoir au moins 6 caractere");
                }
            }}>{message}</div>
        </form>
    </>);
}
export default MotdePasse;*/