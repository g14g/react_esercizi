import React, { Fragment } from "react";
import { useState } from "react";
import "./PasswordChanger.css";

function PasswordChanger() {
    const [insertPassword, setInsertPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [checkPassword, setCheckPassword] = useState("");
    const [passwordSaved, setPasswordSaved] = useState("ciaone");

    function inserisciPassword(e) {
        // console.log(e.target.value);
        setInsertPassword(e.target.value);
    }

    function confermaPassword(e) {
        setConfirmPassword(e.target.value);
    }

    // Classe da impostare sul paragrafo del controllo delle password, per colorare di verde/rosso
    // in base al valore success/error
    function controllaPassword() {
        // if (insertPassword !== "" && insertPassword === confirmPassword) {
        //     setCheckPassword("success");
        // } else {
        //     setCheckPassword("error");
        // }
        setCheckPassword(insertPassword !== "" && insertPassword === confirmPassword ? "success" : insertPassword === "" || confirmPassword === "" ? "" : "error");
    }
    // Valori messaggio/classe
    // "Digita la Password", "";
    // "Le Password coincidono", "success";
    // "Le Password non coincidono", "error";

    // Messaggio da stampare al controllo delle password
    const checkMessage = checkPassword === "" ? "Inserisci le Password" : checkPassword === "success" ? "Le Password coincidono" : "Le Password non coincidono";

    const changePassword = "",
        changeMessage = "";

    return (
        <React.Fragment>
            <section id="password-changer">
                <div className="container">
                    <h2>Password Changer</h2>
                    <div className="password-container">
                        <div className="insert-password">
                            <h3>Inserisci Password</h3>
                            <div className="psw-container">
                                <div>
                                    <label htmlFor="password">Nuova Password</label>
                                    <input
                                        onChange={(e) => {
                                            inserisciPassword(e);
                                        }}
                                        id="password"
                                        type="password"
                                        minLength={4}
                                        maxLength={20}
                                        value={insertPassword}
                                        placeholder="Inserisci la nuova Password"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="confirm-password">Conferma nuova Password</label>
                                    <input
                                        onChange={(e) => {
                                            confermaPassword(e);
                                        }}
                                        id="confirm-password"
                                        type="password"
                                        minLength={4}
                                        maxLength={20}
                                        value={confirmPassword}
                                        placeholder="Ripeti la nuova Password"
                                    />
                                </div>
                            </div>
                            <div className="control-container">
                                <button
                                    onClick={() => {
                                        controllaPassword();
                                    }}>
                                    Controlla Password
                                </button>
                            </div>
                            <div className="change-container">
                                <div>
                                    <label htmlFor="change-password">Password attuale</label>
                                    <input id="change-password" type="password" placeholder="Inserisci la Password attuale" />
                                </div>
                            </div>
                            <div className="control-container">
                                <button
                                    onClick={() => {
                                        cambiaPassword();
                                    }}>
                                    Cambia Password
                                </button>
                            </div>
                        </div>
                        <div className="password-preview">
                            <h3>Preview Password</h3>
                            <div className="password-preview-container">
                                <div>
                                    <label>Preview nuova Password</label>
                                    <p>{insertPassword}</p>
                                </div>
                                <div className="password-length">
                                    <label>Length</label>
                                    <p>{insertPassword.length || ""}</p>
                                </div>
                            </div>
                            <div className="password-preview-container">
                                <div>
                                    <label>Preview Conferma nuova Password</label>
                                    <p>{confirmPassword}</p>
                                </div>
                                <div className="password-length">
                                    <label>Length</label>
                                    <p>{confirmPassword.length || ""}</p>
                                </div>
                            </div>
                            <div className="control-container">
                                <p className={`${checkPassword}-control`}>{checkMessage}</p>
                            </div>
                            <div className="password-preview-container">
                                <div>
                                    <label>Preview Password attuale</label>
                                    <p>{passwordSaved}</p>
                                </div>
                            </div>
                            <div className="control-container">
                                <p className={`${changePassword}-control`}>{changeMessage}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default PasswordChanger;
