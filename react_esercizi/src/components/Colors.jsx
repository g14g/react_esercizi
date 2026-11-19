import React, { Fragment } from "react";
import { useState } from "react";
import "./Colors.css";

function Colors() {
    const [color_v1, setColor_v1] = useState("");
    const [color_v2, setColor_v2] = useState("");
    const [color_v2_btn, setColor_v2_btn] = useState("");

    function cambiaColore_v1(e, source) {
        // console.log("(v1) e.target.value:", e.target.value);
        // console.log("(v1) source:", source);
        const coloreSelezionato_v1 = e.target.value;
        setColor_v1(coloreSelezionato_v1);
        // console.log("(v1) Ho selezionato un colore dalla tendina:", coloreSelezionato_v1);
    }

    function cambiaColore_v2(e, source) {
        // console.log("(v2) e.target.value:", e.target.value);
        // console.log("(v2) source:", source);
        const coloreSelezionato_v2 = e.target.value;
        setColor_v2(coloreSelezionato_v2);
        // console.log("(v2) Ho selezionato un colore dalla tendina:", coloreSelezionato_v2);
    }

    function cambiaColore_v2_Btn(e, source) {
        // console.log("(v2) e.target.value:", e.target);
        // console.log("(v2) source:", source);
        setColor_v2_btn(color_v2);
        // console.log(`(v2) Ho applicato il colore ${color_v2} al quadrato`);
    }

    return (
        <React.Fragment>
            <section id="colors">
                <div className="container">
                    <h2>Colors</h2>
                    <div className="versioni-container">
                        {/* VERSIONE 1 */}
                        <div className="versione versione-1">
                            <div className={`box ${color_v1}`}>
                                <span>{color_v1 || "Scegli un colore"}</span>
                            </div>
                            <div className="change-color-container">
                                <div className="select-container">
                                    <label htmlFor="select-color-v1">Scegli un colore e cambia il colore del box:</label>
                                    <select
                                        value={color_v1}
                                        onChange={(e) => {
                                            cambiaColore_v1(e, "select v1");
                                        }}
                                        name="colors"
                                        id="select-color-v1">
                                        <option value="" disabled>
                                            Scegli un colore...
                                        </option>
                                        <option value="black">Black</option>
                                        <option value="red">Red</option>
                                        <option value="green">Green</option>
                                        <option value="blue">Blue</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* VERSIONE 2 */}
                        <div className="versione versione-2">
                            <div className={`box ${color_v2_btn}`}>
                                <span>{color_v2_btn || "Scegli un colore"}</span>
                            </div>
                            <div className="change-color-container">
                                <div className="select-container">
                                    <label htmlFor="select-color-v2">Scegli un colore:</label>
                                    <div className="select-wrapper">
                                        <select
                                            value={color_v2}
                                            onChange={(e) => {
                                                cambiaColore_v2(e, "select v2");
                                            }}
                                            name="colors"
                                            id="select-color-v2">
                                            <option value="" disabled>
                                                Scegli un colore...
                                            </option>
                                            <option value="black">Black</option>
                                            <option value="red">Red</option>
                                            <option value="green">Green</option>
                                            <option value="blue">Blue</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="button-container">
                                    <label htmlFor="button-color">Cambia il colore del box</label>
                                    <button
                                        className={`${color_v2}-btn`}
                                        onClick={(e) => {
                                            cambiaColore_v2_Btn(e, "btn v2");
                                        }}
                                        id="button-color">
                                        <i className="bi bi-paint-bucket"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Colors;
