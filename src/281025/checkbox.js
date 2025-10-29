import { useState } from "react";

function ChechBoxTest(){
    const Data = ["HTML" , "React" , "Laravel", "BD"];
    const [choix , setChoix] = useState([]);
    const [confirmation , setConfirmation ]= useState(false);
    const handleSubmit = (e)=>{
        e.preventDefault();
        setConfirmation(true);
    };
    const handleChange = (e)=>{
        setConfirmation(false);
        if (e.target.checked){
            setChoix([...choix , e.target.value]);
        }else{
            setChoix(
                ()=> choix.filter(m=> m!==e.target.value)
            )
        }
    }
    ;
    return(
        <>
            <h1>Options supplémentaire :</h1>
            <form onSubmit={handleSubmit}>
                {Data.map(function(data , index){return <label><input value={data} type="checkbox" name={data} key={index}></input>{data}<br/></label>})}
                <br/><button type="submit"  onChange={handleChange}>Confirmer les options () séléctionnées </button>
            </form>
            {confirmation && <div style={{backgroundColor: "lightgreen" , border: "1px solid green ", width: "400px"}}>Vous avez choisi :  {choix}</div>}
        </>
    );
}
export default ChechBoxTest;