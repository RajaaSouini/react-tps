import { useState } from "react";

function AlertForm() {
  const [nom, setNom] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    alert(`Le nom a été soumis : ${nom}`);
  };

  return (
    <>
      <form onSubmit={handleClick}>
        <label>Nom :</label>
        <input type="text" onChange={(e) => setNom(e.target.value)} />
        <button type="submit">Envoyer</button>
      </form>
    </>
  );
}

export default AlertForm;
