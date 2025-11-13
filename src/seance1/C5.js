
function C5(props){
    return(
        <div>

            <label>{props.nom}</label>
            <select>
               {
                props.villes.map(function(vil, index){return <option key={index}>{vil}</option>})
               }
            </select>
        </div>
    );
}
export default C5;