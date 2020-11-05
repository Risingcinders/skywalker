import { useState } from "react";
import "./App.css";
import { Router } from "@reach/router";
import Welcome from "./components/welcome";
import Planet from "./components/planet";

function App() {
    return (
        <div className="App">
            <Welcome />
            <Router>
                    <Planet path="/:field/:id" />
            </Router>
        </div>
    );
}

export default App;
