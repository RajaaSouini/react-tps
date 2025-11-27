import React, { useEffect, useState } from 'react' ;
function UseUsers(url){ 
    const [utilisateurs,setUtilisateurs]=useState([]) 
    useEffect(()=>{ 
  const fetchData=async ()=>{ 
  const response= await  fetch(url); 
  const data=await response.json() 
        setUtilisateurs(data) ;
        } ;
        fetchData() ;
    },[url]) ;
    return utilisateurs; 
  } 
export default UseUsers;