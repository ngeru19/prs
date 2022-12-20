import Item from "./Item";
import { useContext } from "react";
import { PlaygroundContext } from "../../contexts/PlaygroundContext";

export default function PhaseOne() {

    /* Context */

    const {base} = useContext(PlaygroundContext);

    return(
        <div className="playground--phase_one">
                <img className="playground__bg" src="assets/bg-pentagon.svg" 
                alt="background with pentagon"></img>

                <div className="playground__row row-top">
                    <Item
                    source={base.scissors.path} 
                    alt="icon of scissors sign"
                    color={base.scissors.color}
                    title={base.scissors.title}
                    />
                </div>
                
                <div className="playground__row row-middle">
                    <Item
                        source={base.spock.path} 
                        alt="icon of spock's sign with hands"
                        color={base.spock.color}
                        title={base.spock.title}
                    />
                    <Item
                        source={base.paper.path} 
                        alt="icon of paper sign"
                        color={base.paper.color}
                        title={base.paper.title}
                    />
                </div>
                
                <div className="playground__row row-bottom">
                    <Item
                        source={base.lizard.path} 
                        alt="icon of lizard sign"
                        color={base.lizard.color}
                        title={base.lizard.title} 
                    />
                    <Item
                        source={base.rock.path} 
                        alt="icon of rock sign"
                        color={base.rock.color}
                        title={base.rock.title} 
                    />
                </div>
            </div>
    )
}