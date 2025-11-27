import axios from "axios";
import React , {useState , useEffect} from 'react';
export default function App(){
    const[utilisateurs , setUtilisateurs]= useState([]);
    useEffect(()=>{
            axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{console.log(res.data);
                setUtilisateurs(res.data)
            })
        },[])
        return(<>
            <h1>nombre d utilisateurs est : {utilisateurs.length}</h1>
            {utilisateurs.map(user =>{
                return(
                    <div>
                        <p>nom : {user.name} , prenom {user.username}</p>
                        <p>email : {user.email}</p>
                        
                    </div>
                )
            })}
        </>);
}