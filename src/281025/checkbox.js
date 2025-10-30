import { useState } from "react";

function ChechBoxTest() {
  const Data = ["HTML", "React", "Laravel", "BD"];
  const [choix, setChoix] = useState([]);
  const [confirmation, setConfirmation] = useState(false);

  const handleChange = (e) => {
    if (e.target.checked) {
      setChoix([...choix, e.target.value]);
    } else {
      setChoix(choix.filter((m) => m !== e.target.value));
    }
  };

  return (
    <>
      <h1>Options supplémentaire :</h1>
      <form>
        {Data.map(function (data, index) {return (<label key={index}><input type="checkbox"name={data}
                value={data} onChange={handleChange}/>{data}<br /></label>);
        })}
        <br />
        <button type="button"onClick={() => setConfirmation(true)}>
          Confirmer les options ({choix.length}) sélectionnées
        </button>
      </form>

      {confirmation && (
        <div
          style={{
            backgroundColor: "lightgreen",
            border: "1px solid green",
            width: "400px",
            padding: "8px",
            marginTop: "10px",
            borderRadius: "5px",
          }}
        >
          Vous avez choisi : {choix.join(", ")}
        </div>
      )}
    </>
  );
}

export default ChechBoxTest;




