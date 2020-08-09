import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Tarjeta from "./components/Tarjeta";
import ExternalData from "./components/ExternalData";

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <Tarjeta
        nombre="Spider-Man"
        publicacion="2019"
        puntaje={0}
        imagenUrl="https://dam.smashmexico.com.mx/wp-content/uploads/2018/03/femme-fatale-spider-man-homecoming-2-jessica-drew.jpg"
      />

      <Tarjeta
        nombre="Batman"
        publicacion="1989"
        puntaje={10}
        imagenUrl="https://i.pinimg.com/originals/92/b4/a6/92b4a64312055fc4ade1e6254835d6bf.png"
      />

      <Tarjeta
        nombre="Batman & Robin"
        publicacion="1977"
        puntaje={5}
        imagenUrl="https://upload.wikimedia.org/wikipedia/en/3/37/Batman_%26_Robin_poster.jpg"
      />
    </div>
    <div className="container">
      <ExternalData peliTitle="chernobyl" />
      <ExternalData peliTitle="witcher" />
      <ExternalData peliTitle="hulk" />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
