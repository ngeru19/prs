import React from "react";
import { useContext, useEffect } from "react";
import { PlaygroundContext } from "../../contexts/PlaygroundContext";

export default function PhaseTwo() {
    
    /* Context */

    const {setToggler, base, userChoice, sheldonChoice, gameResult, setGameResult, setUserChoice, setSheldonChoice, setGameScore} = useContext(PlaygroundContext);

    /* Game result logic */

    /* let text; */

    useEffect(() => {
        if(base[userChoice].defeats.includes(sheldonChoice)) {
            setGameResult('win')
        } else if(base[sheldonChoice].defeats.includes(userChoice)) {
            setGameResult('lost')
        } else (
            setGameResult('draw')
        )
    }, [userChoice, sheldonChoice])

    function changeGameScore() {
        if(gameResult === 'win') {
            setGameScore(prev => prev +1)
        } else if(gameResult === 'lost') {
            setGameScore(prev => prev - 1)
        }
    }

    /* Click handler */

    const handleClick = () => {
        setToggler(prev => !prev);
        setUserChoice('');
        setSheldonChoice('');
        changeGameScore();
    }

    return(
        <div className="playground--phase_two">
            <div className="area user__area">
                <h2 className="area__title">You picked</h2>
                <div 
                className="area__item" 
                style={{border: `solid 1.5em ${base[userChoice].color}`}}>
                    <img className="area__img" src={"assets/" + base[userChoice].path} ></img>
                </div>
            </div>    
            <div className="area result__area">
                <h2 className="result__title">{gameResult == 'draw' ? `Draw` : `you ${gameResult}`}</h2>
                <button className="result__button" onClick={handleClick}>play again</button>
            </div>
            <div className="area user__area">
                <h2 className="area__title">Sheldon picked</h2>
                <div 
                className="area__item" 
                style={{border: `solid 1.5em ${base[sheldonChoice].color}`}}>
                    <img className="area__img" src={"assets/" + base[sheldonChoice].path} ></img>
                </div>
            </div>   
        </div>    
    )
}


/* if(base[userChoice].defeats.includes(sheldonChoice)) {
    setGameResult('win')
} else if(base[sheldonChoice].defeats.includes(userChoice)) {
    setGameResult('lost')
} else (
    setGameResult('draw')
) */