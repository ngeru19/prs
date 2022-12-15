import React, {useState} from "react";
import PhaseOne from "./PhaseOne";
import PhaseTwo from "./PhaseTwo";

export default function Playground(props) {

    const [userChoice, setUserChoice] = useState('');
    const [sheldonChoice, setSheldonChoice] = useState('');

    return(
        <div className="playground">

            <PhaseOne 
                data={props.data} 
                setUserChoice={setUserChoice}
                setSheldonChoice={setSheldonChoice}
            />

            <PhaseTwo />

        </div>
    )
}