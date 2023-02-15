import { useState } from "react";


function Contador() {

  let [contador, setContador] = useState(0);
  function incrementa() {
    setContador(contador+1);
  }

  return (
    <>
      <p>
        Total: {contador}
      </p>
      <button onClick={incrementa}>Suma</button>
    </>
  )
}

export default Contador;