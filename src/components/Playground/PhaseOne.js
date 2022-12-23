import './Playground.css'
import Item from "./Item";
import { useContext } from "react";
import { PlaygroundContext } from "../../contexts/PlaygroundContext";

/* Image assets import */

import scissors from "../../assets/icon-scissors.svg"
import spock from "../../assets/icon-spock.svg"
import paper from "../../assets/icon-paper.svg"
import lizard from "../../assets/icon-lizard.svg"
import rock from "../../assets/icon-rock.svg"
import pentagon from "../../assets/bg-pentagon.svg"

export default function PhaseOne() {

    /* Context */

    const {base} = useContext(PlaygroundContext);

    return(
        <div className="playground--phase_one">
                <img className="playground__bg" src={pentagon} 
                alt="background with pentagon"></img>

                <div className="playground__row row-top">
                    <Item
                    source={scissors} 
                    alt="icon of scissors sign"
                    color={base.scissors.color}
                    title={base.scissors.title}
                    />
                </div>
                
                <div className="playground__row row-middle">
                    <Item
                        source={spock} 
                        alt="icon of spock's sign with hands"
                        color={base.spock.color}
                        title={base.spock.title}
                    />
                    <Item
                        source={paper} 
                        alt="icon of paper sign"
                        color={base.paper.color}
                        title={base.paper.title}
                    />
                </div>
                
                <div className="playground__row row-bottom">
                    <Item
                        source={lizard} 
                        alt="icon of lizard sign"
                        color={base.lizard.color}
                        title={base.lizard.title} 
                    />
                    <Item
                        source={rock} 
                        alt="icon of rock sign"
                        color={base.rock.color}
                        title={base.rock.title} 
                    />
                </div>
            </div>
    )
}