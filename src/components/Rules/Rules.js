import './Rules.css'

export default function Rules({setActive}) {

    const handleClick = () => setActive(false);

    return(
        <div className="rules">
            <div className="rules__header">
                <h3 className="rules__title">Rules</h3>
                <img className="close__btn" src="./assets/icon-close.svg" alt="close icon" 
                onClick={handleClick} />
            </div>
            <div className="rules__poster">
                <img className="rules__img" src="./assets/image-rules-bonus.svg" alt="rules written on it" /> 
            </div>
        </div>
    )
}