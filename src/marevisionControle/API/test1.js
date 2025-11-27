import { useEffect, useState } from "react";

export default function App() {
  const [users, setUsers] = useState([]);

  // Charger les données de l'API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, []);

  return (
    <div>
      <h1>Liste des utilisateurs</h1>

      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Ville</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
