import React from "react";

export default function Item({title, alt, color, source, setUserChoice, setSheldonChoice}) {

    const myStyle = {
        border: `solid .75em ${color}`
    }

    const options = ['spock', 'lizard', 'scissors', 'rock', 'paper']

    function getSheldonChoice() {
        const random = Math.floor(Math.random() * options.length)
        return options[random];
    }

    function getUserChoice(target) {
        if(target.nodeName === "IMG") {
            return target.parentElement.classList[1];
        } 
        return target.classList[1]
    };



    /* function handleClick(e) {
        console.log(getUserChoice(e.target));

    } */

    /* onShow={() => setActiveIndex(0)} */

    return(
        <div className={'item ' + title} style={myStyle} 
        onClick={
            (e) => {
                setUserChoice(getUserChoice(e.target));
                setSheldonChoice(getSheldonChoice());
            }}>


            <img className="item__img" src={"assets/" + source} 
            alt={alt}></img>
        </div>
    )
}