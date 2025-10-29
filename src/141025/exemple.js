import { useState } from "react";

function ExempleUseState (){
    const [count , setCount] = useState(0);

    return(
        <>
            <p>Compteur = {count}</p>
            <button onClick={()=>{setCount(count+10)}}>Click !</button>
        </>
    );
}
export default ExempleUseState;