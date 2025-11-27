import { useState } from "react";

function Pass(){
    const[pass , setPass] = useState('');
    const handleChange=(e)=>{
        setPass(e.target.value);
    }
    return(<>
        <form>
            <input type="password" onChange={handleChange}/>
            <p>{pass.length<4 ? "insiffusant" : ""}</p>
        </form>
    </>);
}
export default Pass;