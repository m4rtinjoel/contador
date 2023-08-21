import React from "react";
import { useState } from "react";

function Contador() {
  const [contar, setContar] = useState(0);

  const incrementar = () => {
    setContar(contar + 1);
  };

  const disminuir = () => {
    setContar(contar - 1);
  };
  return (
    <>
      <div className="contador">
        <button onClick={disminuir}>restar</button>
        <p>{contar}</p>
        <button onClick={incrementar}>sumar</button>
      </div>
    </>
  );
}

export default Contador;
