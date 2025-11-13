import { useState } from "react";
import { Link } from "react-router-dom";

// faire la recherche par nom et par prix (chaine , nombre)
const DonneesProduits = [
    {id : 1, nom : "T-shirt" , prix : 120 , disponible : true},
    {id : 2, nom : "Pantalon" , prix : 200 , disponible : true},
    {id : 3, nom : "Chemise" , prix : 150 , disponible : false},
    {id : 4, nom : "Jacket" , prix : 300 , disponible : true},
    {id : 5, nom : "Chaussures" , prix :400 , disponible : false},
    {id : 6, nom : "Voile" , prix : 90 , disponible : true},
    {id : 7, nom : "Chaussettes" , prix : 30 , disponible : true}
]
function RechercherProduit (){
    const [reponse , setReponse] = useState([DonneesProduits]);


    return(<>
        <label>Rechercher un produit </label><input type="text" ></input><br/>
        <table border={2}>
            <thead>
                <tr><th>ID</th><th>Nom</th><th>Prix</th><th>Disponibilité</th></tr>
            </thead>
            <tbody>{DonneesProduits.map((produit) => (<tr key={produit.id}>
                <td>{produit.id}</td>
                <td>{produit.nom}</td>
                <td>{produit.prix}</td>
                <td >{produit.disponible ? "Oui" : "Non"}</td>
            </tr>
          ))}
        </tbody>
        </table>
    </>);
}
export default RechercherProduit;
//installer react-router-dom