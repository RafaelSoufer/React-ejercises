import React from "react";
import axios from "axios";

function Tarjeta({ nombre, publicacion, imagenUrl, puntaje }) {
  const Ranking = (() => {
    if (puntaje == 0) return "unseen" + " " + "score";
    if (puntaje <= 5) return "regular" + " " + "score";
    else return "excelent" + " " + "score";
  })();

  return (
    <div className="tarjeta">
      <div className="title">
        <p>
          {nombre} {publicacion}
        </p>
      </div>
      <div className={Ranking}>
        {/* Adentro del div retorno el texto corresponndiente a cada condicion */}
        {(() => {
          if (puntaje == 0) return "No La vi";
          if (puntaje <= 5) return "Regular";
          else return "Excelente";
        })()}
      </div>

      <div className="img">
        <img className="poster" src={imagenUrl} alt={nombre} />
      </div>
    </div>
  );
}

export default Tarjeta;
