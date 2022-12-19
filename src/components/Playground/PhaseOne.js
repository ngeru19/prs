import Item from "./Item";
import { useContext } from "react";
import { PlaygroundContext } from "../../contexts/PlaygroundContext";

export default function PhaseOne() {

    /* Context */

    const {base, setUserChoice, setSheldonChoice, setToggler} = useContext(PlaygroundContext);

    return(
        <div className="playground--phase_one">
                <img className="playground__bg" src="assets/bg-pentagon.svg" 
                alt="pentagon image"></img>

                <div className="playground__row row-top">
                    <Item
                    source={base.scissors.path} 
                    alt="image of scissors"
                    color={base.scissors.color}
                    title={base.scissors.title}
                    />
                </div>
                
                <div className="playground__row row-middle">
                    <Item
                        source={base.spock.path} 
                        alt="image of spock's sign with hands"
                        color={base.spock.color}
                        title={base.spock.title}
                    />
                    <Item
                        source={base.paper.path} 
                        alt="image of paper"
                        color={base.paper.color}
                        title={base.paper.title}
                    />
                </div>
                
                <div className="playground__row row-bottom">
                    <Item
                        source={base.lizard.path} 
                        alt="image of lizard"
                        color={base.lizard.color}
                        title={base.lizard.title} 
                    />
                    <Item
                        source={base.rock.path} 
                        alt="image of rock"
                        color={base.rock.color}
                        title={base.rock.title} 
                    />
                </div>
            </div>
    )
}