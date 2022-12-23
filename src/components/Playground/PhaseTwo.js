import './Playground.css'
import { useState, useContext, useEffect } from "react";
import { PlaygroundContext } from "../../contexts/PlaygroundContext";

/* Image assets import */

import scissors from "../../assets/icon-scissors.svg"
import spock from "../../assets/icon-spock.svg"
import paper from "../../assets/icon-paper.svg"
import lizard from "../../assets/icon-lizard.svg"
import rock from "../../assets/icon-rock.svg"

export default function PhaseTwo() {
    
    /* Context */

    const {setToggler, base, userChoice, aiChoice, gameResult, setGameResult, setUserChoice, setAiChoice, setGameScore} = useContext(PlaygroundContext);

    /* Game result logic */

    useEffect(() => {
        if(base[userChoice].defeats.includes(aiChoice)) {
            setGameResult('win')
        } else if(base[aiChoice].defeats.includes(userChoice)) {
            setGameResult('lost')
        } else (
            setGameResult('draw')
        )
    }, [userChoice, aiChoice])

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
        setAiChoice('');
        changeGameScore();
    }

    /* Image render logic */

    const imgPool = [scissors, spock, paper, lizard, rock]
    const [userImg, setUserImg] = useState(rock);
    const [aiImg, setAiImg] = useState(lizard);

    useEffect(() => {
        switch(base[userChoice].title) {
            case 'scissors':
                setUserImg(scissors);
                break;
            case 'spock':
                setUserImg(spock);
                break;
            case 'paper':
                setUserImg(paper);
                break;
            case 'lizard':
                setUserImg(lizard);
                break;
            case 'rock':
                setUserImg(rock);
                break; 
        }
    }, [userChoice]);

    useEffect(() => {
        switch(base[aiChoice].title) {
            case 'scissors':
                setAiImg(scissors);
                break;
            case 'spock':
                setAiImg(spock);
                break;
            case 'paper':
                setAiImg(paper);
                break;
            case 'lizard':
                setAiImg(lizard);
                break;
            case 'rock':
                setAiImg(rock);
                break; 
        }
    }, [userChoice]);

    /* Return */

    return(
        <div className="playground--phase_two">
            <div className="area user__area">
                <h2 className="area__title">You picked</h2>
                <div 
                className="area__item" 
                style={{border: `solid 1.5em ${base[userChoice].color}`}}>
                    <img className="area__img" src={userImg} alt="some icon"></img>
                </div>
            </div>    
            <div className="area result__area">
                <h2 className="result__title">{gameResult === 'draw' ? `Draw` : `you ${gameResult}`}</h2>
                <button className="result__button" onClick={handleClick}>play again</button>
            </div>
            <div className="area ai__area">
                <h2 className="area__title">AI picked</h2>
                <div 
                className="area__item" 
                style={{border: `solid 1.5em ${base[aiChoice].color}`}}>
                    <img className="area__img" src={aiImg} alt="some icon"></img>
                </div>
            </div>   
        </div>    
    )
}
