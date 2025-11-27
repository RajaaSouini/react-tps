import {Link} from "react-router-dom";

function NavBar(){
    return(
        <nav>
            <Link to="/">Home</Link>|
            <Link to="Publications">Publications</Link>|
            <Link  to="test2">test</Link>
        </nav>
    )
}

export default NavBar;