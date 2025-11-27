import React , {useState , useEffect} from 'react';
import axios from 'axios';

function InfosPays(){
    const [pays,setPays]=useState([]) 
    useEffect(()=>{ 
    axios.get('http://localhost:5000/Pays/2') 
       .then((res)=>{ console.log(res.data);setPays(res.data)}) 
    },[]) 
    return( 
        <div> 
            <p>{pays.nom}</p> 
            <p>{pays.capitale}</p> 
            <p>{pays.poppulation}</p> 
        </div> 
    );
}
export default InfosPays;