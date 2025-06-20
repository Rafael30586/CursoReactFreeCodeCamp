import React from "react"

export default function App5(){

    //const isGoingOut = true

    const [isGoingOut, setIsGoingOut] = React.useState(false) 

    function handleClick(){
        if (isGoingOut) setIsGoingOut(false)
        else setIsGoingOut(true)    
    }

    return(
        <main>
            <h1 className="title">Do i feel like going out tonight?</h1>
            <button 
            className="value" 
            onClick={handleClick}
            aria-label={`Current answer is ${isGoingOut ? "Yes" : "No"}. Click to change it`}>{isGoingOut ? "Yes" : "No"}</button>
        </main>
    )
}