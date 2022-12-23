import './Rules.css'
import iconClose from "../../assets/icon-close.svg"
import imageRulesBonus from "../../assets/image-rules-bonus.svg"

export default function Rules({setActive}) {

    /* Click handlers */

    const handleClick = () => setActive(false);

    /* Return */

    return(
        <div className="rules">
            <div className="rules__header">
                <h3 className="rules__title">Rules</h3>
                <img className="close__btn" src={iconClose} alt="close icon" 
                onClick={handleClick} />
            </div>
            <div className="rules__poster">
                <img className="rules__img" src={imageRulesBonus} alt="rules written on it" /> 
            </div>
        </div>
    )
}