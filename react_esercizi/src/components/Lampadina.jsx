import React, { Fragment } from "react";
import { useState } from "react";
import "./Lampadina.css";

function Lampadina() {
    const [interruttore, setInterruttore] = useState("spenta");

    // Prima versione, quando pensavo che l'icona del button dovesse avere un proprio useState dedicato
    // const [interruttoreIcona, setInterruttoreIcona] = useState("bi bi-toggle-on accesa");
    const interruttoreIcona = interruttore === "accesa" ? "bi bi-toggle-on accesa" : "bi bi-toggle-off spenta";

    function premiInterruttore() {
        const statoLampadina = interruttore === "accesa" ? "spenta" : "accesa";
        setInterruttore(statoLampadina);
        console.log("La lampadina è stata:", statoLampadina);
        // Prima versione, quando pensavo che l'icona del button dovesse avere un proprio useState dedicato
        // setInterruttoreIcona(interruttoreIcona === "bi bi-toggle-on accesa" ? "bi bi-toggle-off spenta" : "bi bi-toggle-on accesa");
    }

    return (
        <React.Fragment>
            <section id="lampadina">
                <div className="container">
                    <i className={`bi bi-lightbulb ${interruttore}`}></i>
                    <h2>Lampadina</h2>
                    <p>
                        La lampadina è <span className={interruttore}>{interruttore}</span>
                    </p>
                    <button onClick={premiInterruttore}>
                        <i className={interruttoreIcona}></i>
                        {/* <i className="bi bi-toggle-off spenta"></i>
                        <i className="bi bi-toggle-on accesa"></i> */}
                    </button>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Lampadina;
