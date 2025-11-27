import React ,{useEffect, useState} from 'react' ;
import UseUsers from './axios';
function AppHook(){
    const utilisateurs = UseUsers('https://jsonplaceholder.typicode.com/users');
    return(<div>
        <h1>liste des posts à partir d'un API </h1>
        <table>
            <tr><th>id</th><th>name</th><th>username</th><th>email</th></tr>
            {utilisateurs.map(utilisateurs=>{
                return (<tr key={utilisateurs.id}>
                    <td>{utilisateurs.id}</td>
                    <td>{utilisateurs.name}</td>
                    <td>{utilisateurs.username} </td>
                    <td>{utilisateurs.email}</td>
                </tr>)
            })}
        </table>
    </div>);
}
export default AppHook;