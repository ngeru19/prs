import "./Playground.css"
import React, {useState} from "react";
import PhaseOne from "./PhaseOne";
import PhaseTwo from "./PhaseTwo";
import { PlaygroundContext } from "../../contexts/PlaygroundContext";
import data from "../../data/data";

export default function Playground({setGameScore}) {

    /*** States ***/

    const [userChoice, setUserChoice] = useState('');
    const [aiChoice, setAiChoice] = useState('');
    const [toggler, setToggler] = useState(true);
    const [gameResult, setGameResult] = useState('');
    const base = data[0];

    /*** Context ***/

    const playgroundContextValues = { 
        userChoice, 
        setUserChoice, 
        aiChoice, 
        setAiChoice, 
        toggler, 
        setToggler,  
        gameResult, 
        setGameResult, 
        setGameScore,
        base
    }

    return(

        <div className="playground">
            <PlaygroundContext.Provider value={playgroundContextValues}>

               {toggler ? <PhaseOne /> : <PhaseTwo />}

            </PlaygroundContext.Provider>
        </div>
    )
}