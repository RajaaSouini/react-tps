
function Personne(props){
    return(
        <div>
            <p>Le nom:</p>
            <label>{props.name}</label>
            <p>Age :</p>
            <label>{props.age}</label>
            <p>Le métier :</p>
            <label>{props.job}</label>
        </div>
    );
    
}
export default Personne;

