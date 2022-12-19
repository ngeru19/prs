import React, {useState} from "react";
import PhaseOne from "./PhaseOne";
import PhaseTwo from "./PhaseTwo";
import { PlaygroundContext } from "./PlaygroundContext";
import data from "../data";

export default function Playground() {

    const [userChoice, setUserChoice] = useState('');
    const [sheldonChoice, setSheldonChoice] = useState('');
    const [toggler, setToggler] = useState(true);
    const base = data[0];

    const playgroundContextValues = {userChoice, setUserChoice, sheldonChoice, setSheldonChoice, toggler, setToggler, base}

    return(

        <div className="playground">
            <PlaygroundContext.Provider value={playgroundContextValues}>

               {toggler ? <PhaseOne /> : <PhaseTwo />}

            </PlaygroundContext.Provider>
        </div>
    )
}