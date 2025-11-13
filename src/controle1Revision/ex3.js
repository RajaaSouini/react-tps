
function Stagiaire (props){
    return(
        <>
        <p>Le stagiaire numéro : {props.numero} de nom : {props.nom} et de filiere : {props.filiere}
             et de niveau {props.niveau}
        </p>
        </>
    );
}
export default Stagiaire;