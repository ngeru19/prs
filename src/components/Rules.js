import React from "react";

export default function Rules() {

    

    return(
        <div className="rules">
            <div className="rules__modal">
                <div className="modal__bg"></div>
                <div className="rules__content">
                    <img className="modal__close" src="assets/icon-close.svg" alt="close icon"></img>
                    <ul className="rules__text">
                        <li>You start with score of 10</li>
                        <li>Every time you win, one point will be added to your score</li>
                        <li>Every time Sheldon wins, one point will be deducted from your score</li>
                        <li>In case of draw, your score will not be changed</li>
                        <li>If your score reaches 15 points you win the game.</li>
                        <li>If your score reaches 5 points Sheldon wins the game.</li>
                    </ul>
                    <img className="rules__img" alt="text with rules" src="assets/image-rules-bonus.svg"></img></div>  
                </div>
            <button className="rules__button">Rules</button>
        </div>
    )
}