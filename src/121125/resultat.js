
function Resultat({ Res }) {
  return (
    <>
      <h1>النتائج</h1>
      <ul>
        {Res.map((ele, index) => (
          <li key={index}>
            {ele.name} - نوعها: {ele.type} - عدد الآيات: {ele.totales_verses}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Resultat;
