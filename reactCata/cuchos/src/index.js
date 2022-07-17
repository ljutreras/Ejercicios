import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./App"
//siempre hacer las importaciones antes de la llamada a componentes

//no es una función, llamammos a todas las funciones const
ReactDOM.render(
    <App/>,
    document.querySelector(
        //html
        "#root"
    )
)
