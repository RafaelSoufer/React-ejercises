import React from "react";
import axios from "axios";

function ExternalData({ peliTitle }) {
  const [peli, setPeli] = React.useState(null);
  React.useEffect(() => {
    const getPeli = async () => {
      const response = await axios.get(
        "http://www.omdbapi.com/?t=" + peliTitle + "&apikey=2068e602"
      );
      setPeli(response.data);
    };
    getPeli();
  }, []);

  return (
    peli && (
      <div className="tarjeta">
        <div className="title">
          <p>
            Vengo de la API: {peli.Title} {peli.Year}
          </p>
        </div>
        <div
          className={(() => {
            if (peli.imdbRating == 0) return "unseen" + " " + "score";
            if (peli.imdbRating <= 7.5) return "regular" + " " + "score";
            else return "excelent" + " " + "score";
          })()}
        >
          {peli.Ratings[0].Value}
          {/* {peli.Ratings.map((Rating) => Rating.Value)} */}
        </div>
        <div className="img">
          <img className="poster" src={peli.Poster} alt={peli.Title} />
        </div>
      </div>
    )
  );
}

export default ExternalData;
