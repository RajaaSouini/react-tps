
import React, { Component } from "react";
import Ligne from "./Ligne";


class Resultats extends Component {
  render() {
    const { etudiants } = this.props;

    return (
      <div>
        <h1>Résultats des étudiants :</h1>
        <table border="1px">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Option</th>
              <th>Note</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {etudiants.map((s) => (
              <Ligne key={s.id} student={s} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Resultats; 

