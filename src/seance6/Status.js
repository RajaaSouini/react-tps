// je dois ajouter le changement de couleur 

function Status(props){
    let color = "";
    let message = "";
    if(props.isOnline === true){
        message ="Connecté";
        color = "green";
        
    }else{
        message = "Déconnecté";
        color = "red";
    };
    return(
       
        <div> 
            <span style={{backgroundColor : color}}>{message}</span>
        </div>
       
    );
}
export default Status;