import { useContext } from "react";
import { PlaygroundContext } from "../../contexts/PlaygroundContext";

export default function Item({title, alt, color, source}) {

    /* Context */

    const {setUserChoice, setSheldonChoice, setToggler} = useContext(PlaygroundContext);

    /* Dynamic style */

    const myStyle = { border: `solid .75em ${color }`}

    /* Sheldon's choice logic */

    const options = ['spock', 'lizard', 'scissors', 'rock', 'paper']
    function getSheldonChoice() {
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
        setSheldonChoice(getSheldonChoice());
        setToggler(prev => !prev)
    }

    return(
        <div className={'item ' + title} style={myStyle} onClick={handleClick}>
            <img className="item__img" src={"assets/" + source} alt={alt}/>
        </div>
    )
}

