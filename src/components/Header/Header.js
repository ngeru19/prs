import './Header.css'
import logoBonus from "../../assets/logo-bonus.svg"

export default function Header({gameScore}) {
    return(
        <div className="header">
            <img 
            className="header__logo" 
            src={logoBonus} 
            alt="logo with text rock, paper, scissors, lizard, spock"></img>
            
            <div className="header__score">
                <h3 className="score__title">Score</h3>
                <p className="score__score">{gameScore}</p>
            </div>
        </div>
    )
}

