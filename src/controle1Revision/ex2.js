import React from "react";

const Pays = ["Maroc" , "Tunisie" , "Algerie" , "France"];

class ListerPays extends React.Component{
    render(){
        return(
        <>
        <p>Rendu :</p>
        <ol>{Pays.map(function(pays, index){return <li type="1" key={index}>{pays}</li>})}</ol>
        </>
    );
    }
}
export default ListerPays;

/*
function ListerPays(){
    return(
        <>
        <p>Rendu :</p>
        <ol>{Pays.map(function(pays, index){return <li type="1" key={index}>{pays}</li>})}</ol>
        </>
    );
}
export default ListerPays; */