

function Resultat({Res}){
    return(<>
        <h1>النتائج </h1>
        <ul>
            {Res.map((ele, index)=>(<li key={index}>{ele}</li>))}
        </ul>
        

    </>);
}
export default Resultat;