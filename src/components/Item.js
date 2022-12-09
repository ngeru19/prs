import React from "react";

export default function Item(props) {
    return(
        <div className="item">
            <img className="item__img" src="assets/icon-scissors.svg" 
            alt={props.alt}></img>
        </div>
    )
}