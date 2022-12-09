import React from "react";
import Item from "./Item";

export default function Playground() {
    return(
        <div className="playground">
            <img className="playground__bg" src="assets/bg-pentagon.svg" 
            alt="pentagon image"></img>
            <div className="playground__row row-top">
                <Item 
                alt="image of scissors" 
                />
            </div>
            <div className="playground__row row-middle">
                <Item 
                alt="image of scissors" 
                />
                <Item 
                alt="image of scissors" 
                />
            </div>
            <div className="playground__row row-bottom">
                <Item 
                alt="image of scissors" 
                />
                <Item 
                alt="image of scissors" 
                />
            </div>
        </div>
    )
}