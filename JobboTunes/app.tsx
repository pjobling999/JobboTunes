import * as React from "react";
import * as DOM from "react-dom";
import "./styles.css";
import { RcMenu } from './RcMenu';


export default function App() {
    return (
        <div className="App">
            <RcMenu />
        </div>
    );
}

const rootElement = document.getElementById("root");
DOM.render(<App />, rootElement);