import React from "react";
import axios from 'axios'
export default class App extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
        utilisateurs:[]
    }
}
componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users')
.then((res)=>{this.setState({utilisateurs:res.data})})
}
render(){
    return(
        <div>
            <h3>liste utilisateurs</h3>
            <div>
                {this.state.utilisateurs.map(user=>{
                return(
                    <div className='child' key={user.id}>
                    <h3 style={{color:"rgb(92, 62, 3)"}}>nom:
                    {user.name} {user.username}</h3>
                    <p>email:{user.email}</p>
                    <p> ville:{user.address.city}
                    rue:{user.address.street} </p>
            </div>
            )
            })}</div>
        </div>
    )
    }
}