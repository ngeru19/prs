import React from "react";
import { useContext } from "react";
import { PlaygroundContext } from "./PlaygroundContext";

export default function PhaseTwo() {
    
    const {setToggler} = useContext(PlaygroundContext);

    return(
        <div className="playground--phase_two">
                <div className="area user__area">
                    <h2 className="area__title">You picked</h2>
                    <div className="area__item">
                        <img className="area__img" src="./assets/icon-rock.svg"></img>
                    </div>
                </div>
                
                <div className="area result__area">
                    <h2 className="result__title">You win</h2>
                    <button className="result__button" onClick={() => setToggler(prev => !prev)}>play again</button>
                </div>
                
                <div className="area opponent__area">
                <h2 className="area__title">You picked</h2>
                    <div className="area__item">
                        <img className="area__img" src="./assets/icon-rock.svg"></img>
                    </div>    
                </div>   
            </div>    
    )
}