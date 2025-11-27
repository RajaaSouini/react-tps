function List(props){
    return(<>
        <h1>Composant resultatList</h1>
        {props.resultat.lenght == 0 ? (<p>
            pas de resultat
        </p>) : (
            <div>
                <ul>{props.resultat.map(
                    (item)=>{return <li key={item.name}>{item.name}</li>}
                )}</ul>
            </div>
        )}
    </>);
}
export default List;