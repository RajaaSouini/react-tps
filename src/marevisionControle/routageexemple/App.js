
import {Route , Routes , BrowserRouter} from "react-router-dom";
import NavBar from "./home";
import InfosPublicatons from "../../controle2202/ex1/quest1axios";
import Appp from "../API/test2";

function App () {
    return(
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/Publications" element={<InfosPublicatons />} />
                <Route path="/test2" element={<Appp/>}/>
            </Routes>
        </BrowserRouter>    
    )
}
export default App;
