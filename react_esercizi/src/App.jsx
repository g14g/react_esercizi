import React, { Fragment } from "react";
import { useState } from "react";
import "./App.css";
import Lampadina from "./components/Lampadina";
import Colors from "./components/Colors";
import PasswordChanger from "./components/PasswordChanger";

function App() {
    return (
        <React.Fragment>
            <Lampadina />
            <Colors />
            <PasswordChanger />
            {/* <section id="lampadina"></section>

            <section id="colors"></section>

            <section id="password-changer"></section>

            <section id="newsletter"></section>

            <section id="preventivo"></section>

            <section id="final-boss"></section> */}
        </React.Fragment>
    );
}

export default App;
