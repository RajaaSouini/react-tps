import React, { useEffect, useState } from 'react';

export default function App() {
  const [utilisateurs, setUtilisateurs] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        console.log("Réponse brute :", response);
        return response.json(); 
      })
      .then((data) => {
        console.log("Utilisateurs :", data);
        setUtilisateurs(data); 
      })
      .catch((error) => {
        console.error("Erreur lors du chargement :", error);
      });
  }, []);

  return (
    <div>
      <h3>Liste des utilisateurs</h3>
      <div>
        <h1>Nombre d'utilisateurs : {utilisateurs.length}</h1>

        {utilisateurs.map((user) => (
          <div className="child" key={user.id}>
            <h3 style={{ color: "rgb(92, 62, 3)" }}>
              Nom : {user.name} ({user.username})
            </h3>
            <p>Email : {user.email}</p>
            <p>
              Ville : {user.address.city} <br />
              Rue : {user.address.street}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}




