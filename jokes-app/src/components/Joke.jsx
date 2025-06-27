import React from "react"

export default function Joke(props){

    const [isShown, setIsShown] = React.useState(false)

    function toggleShown(){
        if(isShown) setIsShown(false)
        else setIsShown(true)
    }

    return(
        <>
            <span className="setup">{props.setup}</span> <br />
            {isShown && <span className="punchline">{props.punchline}</span>} <br /> 
            <span>votes : {props.votes}</span> <br /> 
            <span> is pun : {props.isPun}</span> <br /> <br />
            <button onClick={toggleShown}>{isShown ? "Hid punchline" : "Show punchline"}</button> <br />
        </>
    )
}