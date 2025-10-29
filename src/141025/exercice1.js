
import React from "react";

class ChangerCouleur extends React.Component{
    constructor(props){
        super(props);
        this.state={color: "red"};
        this.props = props;
    }
    render(){
        return(
            <>
            <div style={{height:"400px ",width:this.props.width, backgroundColor : this.state.color, margin: "10px"}} >  
            </div>
            <button onClick={()=>{this.setState({color:this.state.color === "red"? "green": "red"})}}>Changer la couleur</button>
            </>
        );
    }
}

export default  ChangerCouleur; 