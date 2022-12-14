import React from "react";

export default function Item(props) {

    const myStyle = {
        border: `solid .75em ${props.color}`
    }

    return(
        <div className="item" style={myStyle}>
            <img className="item__img" src={"assets/" + props.source} 
            alt={props.alt}></img>
        </div>
    )
}