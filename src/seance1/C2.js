function calculerAge(dateNaissance){
   return new Date().getFullYear() - dateNaissance.getFullYear() ;
}
var myStyle = {
    color: "red",
    backgroundColor: "lightBlue",
    fontFamily: "cursive"
};
var back = {
    backgroundColor: "lightGray"
}

const dateNaissance= new Date(2000, 11, 12);
const age = calculerAge(dateNaissance);

function C2(){
   return(
        <div style={back}>
            <p1 style={myStyle}>Calculateur d'age </p1>
            <p>Date de naissance fournie : {dateNaissance.getFullYear()}-{dateNaissance.getMonth()}-{dateNaissance.getDay()}</p>
            <p>Votre age est: {age} ans</p>
        </div>
   );
}
export default C2;

