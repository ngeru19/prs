import './Modal.css'

export default function Modal({active, setActive, children}) {
    
    /* Click handlers */

    const handleModalClick = () => setActive(false);
    const handleModalUnclick = (e) => e.stopPropagation() 
    
    return(
        <div 
        className={active ? "modal active" : "modal"} 
        onClick={handleModalClick}>
            <div 
            className={active ? "modal__content active" : "modal__content"} 
            onClick={handleModalUnclick}>
                {children}
            </div>
        </div>
    )
}