import Item from "./Item";
import { useContext } from "react";
import { PlaygroundContext } from "../../contexts/PlaygroundContext";

import iconScissors from "../../assets/icon-scissors.svg"
import iconSpock from "../../assets/icon-spock.svg"
import iconPaper from "../../assets/icon-paper.svg"
import iconLizard from "../../assets/icon-lizard.svg"
import iconRock from "../../assets/icon-rock.svg"
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
                    source={iconScissors} 
                    alt="icon of scissors sign"
                    color={base.scissors.color}
                    title={base.scissors.title}
                    />
                </div>
                
                <div className="playground__row row-middle">
                    <Item
                        source={iconSpock} 
                        alt="icon of spock's sign with hands"
                        color={base.spock.color}
                        title={base.spock.title}
                    />
                    <Item
                        source={iconPaper} 
                        alt="icon of paper sign"
                        color={base.paper.color}
                        title={base.paper.title}
                    />
                </div>
                
                <div className="playground__row row-bottom">
                    <Item
                        source={iconLizard} 
                        alt="icon of lizard sign"
                        color={base.lizard.color}
                        title={base.lizard.title} 
                    />
                    <Item
                        source={iconRock} 
                        alt="icon of rock sign"
                        color={base.rock.color}
                        title={base.rock.title} 
                    />
                </div>
            </div>
    )
}