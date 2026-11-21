import React, { Fragment } from "react";
import { useState } from "react";
import "./PasswordChanger.css";

function PasswordChanger() {
    const [insertNewPassword, setInsertNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [checkNewPassword, setCheckNewPassword] = useState(""); // "" | "success" | "error"
    const [insertCurrentPassword, setInsertCurrentPassword] = useState("");
    const [checkCurrentPassword, setCheckCurrentPassword] = useState(""); // "" | "success" | "error"

    const [currentPassword, setCurrentPassword] = useState("boolean");
    // console.log("currentPassword:", currentPassword);

    function inserisciNuovaPassword(e) {
        const insertNewPasswordValue = e.target.value;
        // console.log(e.target.value);
        setInsertNewPassword(insertNewPasswordValue);

        if (insertNewPasswordValue === "") {
            setConfirmNewPassword("");
        }

        // RESET
        setCheckNewPassword("");
        setCheckCurrentPassword("");
    }

    function confermaNuovaPassword(e) {
        setConfirmNewPassword(e.target.value);

        // RESET
        setCheckNewPassword("");
        setCheckCurrentPassword("");
    }

    // Classe da impostare sul paragrafo del controllo delle password, per colorare di verde/rosso
    // in base al valore success/error
    function controllaNuovaPassword(e) {
        // prettier-ignore
        setCheckNewPassword(
            insertNewPassword !== "" && insertNewPassword === confirmNewPassword 
            ? "success" 
            : insertNewPassword === "" || confirmNewPassword === "" 
            ? "" 
            : "error");
    }

    /* */

    function inserisciPasswordAttuale(e) {
        setInsertCurrentPassword(e.target.value);
        setCheckCurrentPassword("");
    }

    function controllaCambiaPassword(e) {
        // console.log("Cambia Password");
        if (checkNewPassword === "success" && insertCurrentPassword === currentPassword) {
            setCurrentPassword(insertNewPassword);
            setCheckCurrentPassword("success");

            // RESET
            setInsertNewPassword("");
            setConfirmNewPassword("");
            setInsertCurrentPassword("");
            setCheckNewPassword("");
        } else {
            setCheckCurrentPassword("error");
        }
    }

    // Valori checkNewPassword/checkNewPasswordMessage
    // "", "";
    // "Password identiche", "success";
    // "Password diverse", "error";

    // Messaggio da stampare al controllo delle password
    // prettier-ignore
    const checkNewPasswordMessage = 
        checkNewPassword === "success" 
        // ? "Password identiche" 
        ? "Le Password coincidono" 
        : checkNewPassword === "error" 
        // ? "Password diverse"
        ? "Le Password non coincidono"
        : "";

    // console.log("checkNewPassword:", checkNewPassword);
    // console.log("checkNewPassword:", checkNewPassword !== "success");
    // console.log("checkNewPasswordMessage:", checkNewPasswordMessage);

    // prettier-ignore
    const checkCurrentPasswordMessage = 
        // checkCurrentPassword !== "" && checkCurrentPassword === "success" 
        checkCurrentPassword === "success" 
        // ? "Password cambiata" 
        ? "Password aggiornata" 
        // : checkCurrentPassword !== "" && checkCurrentPassword === "error" 
        : checkCurrentPassword === "error" 
        // ? "Password errata" 
        ? "La Password è sbagliata" 
        : "";

    // console.log("checkCurrentPasswordMessage:", checkCurrentPasswordMessage);

    return (
        <React.Fragment>
            <section id="password-changer">
                <div className="container">
                    <h2>Password Changer</h2>
                    <div className="password-container">
                        {/* INSERISCI NUOVA PASSWORD E CAMBIA LA PASSWORD ATTUALE */}
                        <div className="insert-password">
                            <h3>Inserisci e Cambia</h3>
                            <div className="insert-container">
                                <div>
                                    <label htmlFor="password">Nuova Password</label>
                                    <input
                                        onChange={(e) => {
                                            inserisciNuovaPassword(e);
                                        }}
                                        id="password"
                                        type="password"
                                        // minLength={4}
                                        maxLength={10}
                                        value={insertNewPassword}
                                        placeholder="Inserisci la nuova Password"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="confirm-password">Conferma nuova Password</label>
                                    <input
                                        disabled={insertNewPassword === ""}
                                        onChange={(e) => {
                                            confermaNuovaPassword(e);
                                        }}
                                        id="confirm-password"
                                        type="password"
                                        // minLength={4}
                                        maxLength={10}
                                        value={confirmNewPassword}
                                        placeholder="Ripeti la nuova Password"
                                    />
                                </div>
                            </div>
                            <div className="control-container">
                                <button
                                    disabled={insertNewPassword === "" || confirmNewPassword === "" ? true : false}
                                    type="button"
                                    onClick={(e) => {
                                        controllaNuovaPassword();
                                    }}>
                                    Controlla Password
                                </button>
                            </div>
                            <hr />
                            <div className="change-container">
                                <div>
                                    <label htmlFor="change-password">Password attuale</label>
                                    <input
                                        disabled={checkNewPassword !== "success"}
                                        onChange={(e) => {
                                            inserisciPasswordAttuale(e);
                                        }}
                                        id="change-password"
                                        type="password"
                                        value={insertCurrentPassword}
                                        placeholder="Inserisci la Password attuale"
                                    />
                                </div>
                            </div>
                            <div className="control-container">
                                <button
                                    type="button"
                                    disabled={checkNewPassword !== "success"}
                                    onClick={(e) => {
                                        controllaCambiaPassword();
                                    }}>
                                    Cambia Password
                                </button>
                            </div>
                        </div>
                        {/* ANTEPRIMA E CONTROLLO PASSWORD INSERITE */}
                        <div className="password-preview">
                            <h3>Anteprima e Controllo</h3>
                            <div className="password-preview-container">
                                <div>
                                    <label htmlFor="preview-new-password">Preview nuova Password</label>
                                    <output id="preview-new-password">{insertNewPassword}</output>
                                </div>
                                <div className="password-length">
                                    <label htmlFor="length-new-password">Length</label>
                                    <output id="length-new-password">{insertNewPassword.length || ""}</output>
                                </div>
                            </div>
                            <div className="password-preview-container">
                                <div>
                                    <label htmlFor="preview-confirm-new-password">Preview Conferma nuova Password</label>
                                    <output id="preview-confirm-new-password">{confirmNewPassword}</output>
                                </div>
                                <div className="password-length">
                                    <label htmlFor="length-confirm-new-password">Length</label>
                                    <output id="length-confirm-new-password">{confirmNewPassword.length || ""}</output>
                                </div>
                            </div>
                            <div className="control-container">
                                <label htmlFor="control-new-password">Controlla Nuova Password</label>
                                <output id="control-new-password" className={checkNewPassword ? `${checkNewPassword}-control` : ""}>
                                    {checkNewPasswordMessage}
                                </output>
                            </div>
                            <hr />
                            <div className="password-preview-container">
                                <div>
                                    <label htmlFor="preview-current-password">Preview Password attuale</label>
                                    <output id="preview-current-password">{insertCurrentPassword}</output>
                                </div>
                                <div>
                                    <label htmlFor="current-password">Password attuale</label>
                                    <output id="current-password">{currentPassword}</output>
                                </div>
                            </div>
                            <div className="control-container">
                                <label htmlFor="control-password-change">Controlla Cambia Password</label>
                                <output id="control-password-change" className={checkCurrentPassword ? `${checkCurrentPassword}-control` : ""}>
                                    {checkCurrentPasswordMessage}
                                </output>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default PasswordChanger;
