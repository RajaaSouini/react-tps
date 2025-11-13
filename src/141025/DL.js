import styled from "styled-components";
import { useState } from "react";

const Image = styled.img`
  height: 300px;
  width: 400px;
  border-radius: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 15px;
`;

const Next = styled.button`
  font-size: 1.2em;
  border: 2px solid palevioletred;
  border-radius: 8px;
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
`;

const caractereAnime = [
  { img: "images/luffy.png", reponse: "Luffy", choix1: "Naruto", choix2: "Luffy" },
  { img: "images/ace.jpg", reponse: "Ace", choix1: "Sasuki", choix2: "Ace" },
  { img: "images/chanks.jpg", reponse: "Chanks", choix1: "Chanks", choix2: "Nami" },
  { img: "images/gon.jpg", reponse: "Gon", choix1: "Leoreo", choix2: "Gon" },
  { img: "images/hisouka.jpg", reponse: "Hisuka", choix1: "Hisuka", choix2: "VigaPank" },
  { img: "images/kilua.jpg", reponse: "Kilua", choix1: "Gon", choix2: "Kilua" },
  { img: "images/Roger.jpg", reponse: "Rojer", choix1: "Gon", choix2: "Rojer" }
];

export default function DL() {
  const [img, setImg] = useState(0);
  const [score, setScore] = useState(0);
  const [couleur, setCouleur] = useState("white");
  const [couleur2, setCouleur2] = useState("white");
  const [disabled, setDisabled] = useState(false); 

  function ChangerImage() {
    setImg((indexImg) => (indexImg + 1) % caractereAnime.length);
    setCouleur("white");
    setCouleur2("white");
    setDisabled(false); 
  }

  function VerifierReponse(choix, bouton) {
    const bonneReponse = caractereAnime[img].reponse;
    setDisabled(true); 

    if (choix === bonneReponse) {
      setScore((s) => s + 1);
      if (bouton === 1) setCouleur("green");
      else setCouleur2("green");
    } else {
      if (bouton === 1) setCouleur("red");
      else setCouleur2("red");
    }
  }

  return (
    <Container>
      <Image alt="" src={caractereAnime[img].img} />
      <div>
        <button
          disabled={disabled}
          style={{
            margin: "5px",
            padding: "10px",
            backgroundColor: couleur,
            cursor: disabled ? "not-allowed" : "pointer"
          }}
          onClick={() => VerifierReponse(caractereAnime[img].choix1, 1)}
        >
          {caractereAnime[img].choix1}
        </button>

        <button
          disabled={disabled}
          style={{
            margin: "5px",
            padding: "10px",
            backgroundColor: couleur2,
            cursor: disabled ? "not-allowed" : "pointer"
          }}
          onClick={() => VerifierReponse(caractereAnime[img].choix2, 2)}
        >
          {caractereAnime[img].choix2}
        </button>
      </div>

      <Next onClick={ChangerImage}>Next</Next>
      <p>Score : {score}</p>
    </Container>
  );
}




/*
import { use, useState } from "react";

const caractereAnime = [
    {img:"images/luffy.png" , reponse:"Luffy" , choix1:"Naruto" , choix2:"Luffy"},
    {img:"images/ace.jpg" , reponse: "Ace" , choix1:"Sasuki" , choix2: "ACe"},
    {img: "images/chanks.jpg", reponse : "Chanks", choix1 : "Chanks", choix2: "Nami"},
    {img: "images/gon.jpg" , reponse : "Gon" , choix1 : "Leoreo" , choix2:"Gon"},
    {img: "images/hisouka.jpg", reponse : "Hisuka" , choix1: "Hisuka" , choix2: "VigaPank"},
    {img : "images/kilua.jpg" , reponse : "Kilua" , choix1:"Gon" ,choix2: "Kilua" },
    {img: "images/Roger.jpg", reponse: "Rojer" , choix1:"Gon", choix2: "Rojer"}
];
const myStyle = {
    height: "200px",
    width : "200px",
    margin: "10px"
}
function DL(){
    const[img , setimg] = useState(0);
    const [message, setMessage] = useState("");
    const [score, setScore] = useState(0);
    
    function ChangerImage(){
        setimg((previmg) => (previmg + 1) % caractereAnime.length);
    }
    function verifierReponse(choix) {
    if (choix === caractereAnime[img].reponse) {
        setScore((prevScore) => prevScore + 1);
        setMessage(score);
    } else {
      setMessage(score);
    }
  }

    return(
        <>
            <div>
                <img style={myStyle} alt="" src={caractereAnime[img].img} />
            </div>
            <button onClick={ChangerImage}> next </button>
            <div>
                <button
                onClick={() => verifierReponse(caractereAnime[img].choix1)}
                style={{ margin: "5px", padding: "10px" }}
                >
                {caractereAnime[img].choix1}
                </button>

                <button
                onClick={() => verifierReponse(caractereAnime[img].choix2)}
                style={{ margin: "5px", padding: "10px" }}
                >
                {caractereAnime[img].choix2}
                </button>
            </div>

            <p>{message}</p>
        </>
    );
}
 */