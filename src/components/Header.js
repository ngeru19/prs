import React from "react";

export default function Header() {
    return(
        <div className="header">
            <img className="header__logo" src="assets/logo-bonus.svg" alt="logo with text rock, paper, scissors, lizard, spock"></img>
            <div className="header__score">
                <h3 className="score__title">Score</h3>
                <p className="score__score">12</p>
            </div>
        </div>
    )
}

