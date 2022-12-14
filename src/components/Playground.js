import React from "react";
import Item from "./Item";

export default function Playground(props) {

    console.log(props.data);

    return(
        <div className="playground">
            <img className="playground__bg" src="assets/bg-pentagon.svg" 
            alt="pentagon image"></img>
            <div className="playground__row row-top">
                <Item
                source={props.data[0].path} 
                alt="image of scissors"
                color={props.data[0].color} 
                />
            </div>
            <div className="playground__row row-middle">
                <Item
                    source={props.data[1].path} 
                    alt="image of scissors"
                    color={props.data[1].color} 
                />
                <Item
                    source={props.data[2].path} 
                    alt="image of scissors"
                    color={props.data[2].color} 
                />
            </div>
            <div className="playground__row row-bottom">
                <Item
                    source={props.data[3].path} 
                    alt="image of scissors"
                    color={props.data[3].color} 
                />
                <Item
                    source={props.data[4].path} 
                    alt="image of scissors"
                    color={props.data[4].color} 
                />
            </div>
        </div>
    )
}