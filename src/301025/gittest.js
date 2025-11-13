import React, { useState } from "react";

export default function RechercheUser() {
  const [id, setId] = useState(""); // pour stocker l’ID entré
  const [user, setUser] = useState(null); // pour stocker la personne trouvée
  const [erreur, setErreur] = useState("");

  const chercherUser = () => {
    if (!id) {
      setErreur("Veuillez entrer un ID !");
      setUser(null);
      return;
    }

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Utilisateur non trouvé");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Utilisateur trouvé :", data);
        setUser(data);
        setErreur("");
      })
      .catch((error) => {
        setErreur(error.message);
        setUser(null);
      });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🔎 Recherche d’un utilisateur par ID</h2>

      <input
        type="number"
        placeholder="Entrer un ID (1 à 10)"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={chercherUser}>Chercher</button>

      {erreur && <p style={{ color: "red" }}>{erreur}</p>}

      {user && (
        <div style={{ marginTop: "20px" }}>
          <h3>{user.name} ({user.username})</h3>
          <p>Email : {user.email}</p>
          <p>Ville : {user.address.city}</p>
          <p>Rue : {user.address.street}</p>
        </div>
      )}
    </div>
  );
}
