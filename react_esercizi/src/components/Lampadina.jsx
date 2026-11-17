import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import "./Lampadina.css";

function Lampadina() {
    // Stato del button
    const [interruttore, setInterruttore] = useState(false);

    // Variabili che dipendono dallo stato del button
    const statoLampadina = interruttore ? "accesa" : "spenta";
    const interruttoreIcona = interruttore ? "bi bi-toggle-on accesa" : "bi bi-toggle-off spenta";

    function premiInterruttore() {
        // Inverto lo stato di interruttore, indipendentemente dal suo valore
        setInterruttore(!interruttore);
    }

    // useEffect esegue il blocco di codice nella sua funzione arrow, solo quando la variabile
    // specifica dopo la funzione arrow, tra parentesi quadre [interruttore] ha cambiato
    // effettivamente stato
    useEffect(() => {
        // console.log("La lampadina è stata:", statoLampadina);
    }, [interruttore]);

    return (
        <React.Fragment>
            <section id="lampadina">
                <div className="container">
                    <i className={`bi bi-lightbulb ${statoLampadina}`}></i>
                    <h2>Lampadina</h2>
                    <p>
                        La lampadina è <span className={statoLampadina}>{statoLampadina}</span>
                    </p>
                    <button onClick={premiInterruttore}>
                        <i className={interruttoreIcona}></i>
                    </button>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Lampadina;
