import React from "react";
import { useContext } from "react";
import { PlaygroundContext } from "./PlaygroundContext";

export default function PhaseTwo() {
    
    const {setToggler, base, userChoice, sheldonChoice} = useContext(PlaygroundContext);

    return(
        <div className="playground--phase_two">
            <div className="area user__area">
                <h2 className="area__title">You picked</h2>
                <div 
                className="area__item" 
                style={{ border: `solid 1.5em ${base[userChoice].color}`}}>
                    <img className="area__img" src={"assets/" + base[userChoice].path} ></img>
                </div>
            </div>    
            <div className="area result__area">
                <h2 className="result__title">You win</h2>
                <button className="result__button" onClick={() => setToggler(prev => !prev)}>play again</button>
            </div>
            <div className="area user__area">
                <h2 className="area__title">Sheldon picked</h2>
                <div 
                className="area__item" 
                style={{ border: `solid 1.5em ${base[sheldonChoice].color}`}}>
                    <img className="area__img" src={"assets/" + base[sheldonChoice].path} ></img>
                </div>
            </div>   
        </div>    
    )
}