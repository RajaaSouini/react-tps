import C5 from './C5';
function C6(props){
    return(
        <div>
            <label>Nom :</label>
            <input type='text' name='nom'></input>
            <label>Prenom :</label>
            <input type='text' name='prenom'></input>
             <C5 ville= {props.ville} l="ville"/>
        </div>
    );
}
export default C6;