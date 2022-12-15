import React from "react";
import Item from "./Item";

export default function PhaseOne({data, setUserChoice, setSheldonChoice}) {
    return(
        <div className="playground--phase_one">
                <img className="playground__bg" src="assets/bg-pentagon.svg" 
                alt="pentagon image"></img>
                <div className="playground__row row-top">
                    <Item
                    source={data[0].path} 
                    alt="image of scissors"
                    color={data[0].color}
                    title={data[0].title}
                    setUserChoice={setUserChoice}
                    setSheldonChoice={setSheldonChoice}
                    />
                </div>
                <div className="playground__row row-middle">
                    <Item
                        source={data[1].path} 
                        alt="image of scissors"
                        color={data[1].color}
                        title={data[1].title}
                        setUserChoice={setUserChoice}
                        setSheldonChoice={setSheldonChoice} 
                    />
                    <Item
                        source={data[2].path} 
                        alt="image of scissors"
                        color={data[2].color}
                        title={data[2].title}
                        setUserChoice={setUserChoice}
                        setSheldonChoice={setSheldonChoice} 
                    />
                </div>
                <div className="playground__row row-bottom">
                    <Item
                        source={data[3].path} 
                        alt="image of scissors"
                        color={data[3].color}
                        title={data[3].title}
                        setUserChoice={setUserChoice}
                        setSheldonChoice={setSheldonChoice} 
                    />
                    <Item
                        source={data[4].path} 
                        alt="image of scissors"
                        color={data[4].color}
                        title={data[4].title}
                        setUserChoice={setUserChoice}
                        setSheldonChoice={setSheldonChoice} 
                    />
                </div>
            </div>
    )
}