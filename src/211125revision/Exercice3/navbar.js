import { Link } from "react-router-dom";

function Navbar(){
    return(<>
        <ul>
            <li><Link to="">Accueil</Link></li>
            <li><Link to="">Liste des utilisateurs</Link></li>
            <li><Link to="">Utilisateur choisi par id </Link></li>
        </ul>
    </>);
}
export default Navbar;