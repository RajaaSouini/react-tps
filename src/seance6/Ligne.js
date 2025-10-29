import React, { Component } from "react";

class Ligne extends Component {
  render() {
    const { student } = this.props; 

    return (
      <tr>
        <td>{student.nom}</td>
        <td>{student.option}</td>
        <td>{student.note}</td>
        <td>{student.status}</td>
      </tr>
    );
  }
}

export default Ligne;

