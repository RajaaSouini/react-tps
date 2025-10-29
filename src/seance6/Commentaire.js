let myStyle = {
    backgroundColor : "lightBlue",
    width : "1000px", 
    height : "300px",
    margin : "10px",
    fontSize : "40px" 
}
function Commentaire(props){
    return(
        <div>
            <div style={myStyle}>
                <p>{props.message}</p>
                <p>Posté par : {props.nom} , le {props.date}</p>
            </div>
        </div>
    );
}
export default Commentaire;