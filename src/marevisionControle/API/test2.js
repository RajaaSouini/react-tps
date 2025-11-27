import { useEffect, useState } from "react";
import axios from "axios";

export default function Appp() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      
  }, []);

  return (
    <div>
      <h1>Liste des utilisateurs (Axios)</h1>

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
