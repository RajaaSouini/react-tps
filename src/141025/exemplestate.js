import React from "react";
class ExempleStates extends React.Component{
    constructor(){
        super();
        this.state = {count : 0};
    }
    render(){
        return(
            <>
                <p>Compteur : {this.state.count}</p>
                <button onClick={()=>{this.setState({count: this.state.count +1})}}>OK !</button>
            </>
        );
    }
}
export default ExempleStates;
