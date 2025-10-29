import React from "react";
import Stagiaires from "./Stagiaire";
class Class extends React.Component{
  constructor(props){
    super(props);
    this.props = props;
    this.state = {
      message:"", numRecherche: 0,
      stagiaires: [
      {num : 1 , nom : "rajaa" , filiere : "dev" , niveau : "4eme"},
      {num : 2 , nom : "rajaa" , filiere : "dev" , niveau : "4eme"},
      {num : 3 , nom : "rajaa" , filiere : "dev" , niveau : "4eme"},
      {num : 4 , nom : "rajaa" , filiere : "dev" , niveau : "4eme"},
      {num : 5 , nom : "rajaa" , filiere : "dev" , niveau : "4eme"}
    ]
    }
  }
  RechercherStagiaire = () =>{
    
    const { numRecherche, stagiaires } = this.state;
    const stagiaireTrouve = stagiaires.find(
      (stag) => stag.num === Number(numRecherche)
    );
    if (stagiaireTrouve){
       this.setState ({message :`le stagiaire trouvé ${stagiaireTrouve.num} de nom ${stagiaireTrouve.nom} et de filiere 
       ${stagiaireTrouve.filiere} et de niveau ${stagiaireTrouve.niveau} `})
    }else{
      this.setState({message: "not found in the list "});
    }
  }
  render(){
    return(
      <>
       <h3>La liste des stagiaires</h3>
       {this.state.stagiaires.map((stag,index)=>(<Stagiaires 
       key ={index} 
       num = {stag.num} 
       nom = {stag.nom}
        filiere={stag.filiere} 
        niveau={stag.niveau} />))}

        <input type="number " value={this.state.numRecherche}
        onChange={(e) => this.setState({ numRecherche: e.target.value })}></input>
        <button onClick={this.RechercherStagiaire}> chercher </button>
        <p>{this.state.message}</p>
      </>
    );

  }
}
export default Class;
/*
import React from "react";
import Stagiaire from "./Stagiaire";

class Classe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numiRecherche: "",
      stagiaires: [
        { numi: 1, nom: "ahmed", filiere: "dev", niveau: "S2" },
        { numi: 2, nom: "sara", filiere: "dev", niveau: "S3" },
        { numi: 3, nom: "ali", filiere: "reseau", niveau: "S2" },
        { numi: 4, nom: "mohamed", filiere: "dev", niveau: "S1" },
      ],
    };
  }

  // méthode pour rechercher un stagiaire par numéro
  RechercherStagiaire = () => {
    const { numiRecherche, stagiaires } = this.state;
    const stagiaireTrouve = stagiaires.find(
      (stag) => stag.numi == numiRecherche
    );
    if (stagiaireTrouve) {
      alert(
        `Stagiaire trouvé : ${stagiaireTrouve.nom} - ${stagiaireTrouve.filiere} (${stagiaireTrouve.niveau})`
      );
    } else {
      alert("Aucun stagiaire trouvé !");
    }
  };

  render() {
    return (
      <>
        <h3>Liste des Stagiaires</h3>

        {this.state.stagiaires.map((stag, index) => (
          <Stagiaire
            key={index}
            numi={stag.numi}
            nom={stag.nom}
            filiere={stag.filiere}
            niveau={stag.niveau}
          />
        ))}

        <br />
        <label>Recherche Stagiaire par Numéro :</label>
        <br />
        <input
          type="number"
          value={this.state.numiRecherche}
          onChange={(e) => this.setState({ numiRecherche: e.target.value })}
        />
        <button onClick={this.RechercherStagiaire}>Recherche</button>
      </>
    );
  }
}

export default Classe; */

/*
 */
