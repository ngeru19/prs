import './Playground.css'
import { useContext } from "react";
import { PlaygroundContext } from "../../contexts/PlaygroundContext";

export default function Item({title, alt, color, source}) {

    /* Context */

    const {setUserChoice, setAiChoice, setToggler} = useContext(PlaygroundContext);

    /* Dynamic style */

    const myStyle = { border: `solid .75em ${color }`}

    /* Ai's choice logic */

    const options = ['spock', 'lizard', 'scissors', 'rock', 'paper']
    function getAiChoice() {
        const random = Math.floor(Math.random() * options.length)
        return options[random];
    }

    /* Item's identifier logic */

    function getUserChoice(target) {
        if(target.nodeName === "IMG") {
            return target.parentElement.classList[1];
        } 
        return target.classList[1]
    };

    /* Click handler */

    const handleClick = (e) => {
        setUserChoice(getUserChoice(e.target));
        setAiChoice(getAiChoice());
        setToggler(prev => !prev);
    }

    /* Return */

    return(
        <div className={'item ' + title} style={myStyle} onClick={handleClick}>
            <img className="item__img" src={source} alt={alt}/>
        </div>
    )
}

