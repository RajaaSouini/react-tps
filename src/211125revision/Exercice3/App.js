import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./navbar";

function App (){
    return(<>
        <BrowserRouter>
            <Navbar>
                <Routes>
                    <Route path="/navbar" element={<Navbar/>}></Route>
                    <Route path="/Listeuser"></Route>
                </Routes>
            </Navbar>
        </BrowserRouter>
    </>);
}