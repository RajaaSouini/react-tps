import { useState, useEffect } from "react";
import axios from "axios";
function InfosPublicatons () {
    const [publications, setPublications] = useState([]);
    useEffect ( () => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => setPublications(res.data))
    },[])

    return (
        <div>
            <h2>Liste des publications</h2>
            <table border="1">
                <tr>
                    <th>ID</th>
                    <th>Auteur</th>
                    <th>Contenu</th>
                </tr>
                    {publications.map( (publication) => (
                        <tr>
                            <td>{publication.id}</td>
                            <td>{publication.auteur}</td>
                            <td>{publication.contenu}</td>
                        </tr>
                    ))}
            </table>   
        </div>
    )
}

export default InfosPublicatons;