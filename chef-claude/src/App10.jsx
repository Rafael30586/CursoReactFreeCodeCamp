import pads from "./pads"
import React from "react"
import Pad from "./components/Pad"

export default function App10(props) {

    const [pad,setPad] = React.useState(pads)

    
    let darkColor = {
        backgroundColor:"#222222"
    }

    let lightColor = {
        backgroundColor:"#cccccc"
    }

    const buttons = pad.map((button)=>{ // El estilo que se le pasa al botón es como objeto
        return <Pad color={button.color}></Pad>
    })
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from pads.js
     * 2. Map over that state array and display each one
     *    as a <button> (CSS is already written for you)
     *    (Don't worry about using the "on" or "color" 
     *    properties yet)
     */
    return (
        <main>
            <div className="pad-container">
                {buttons}
            </div>
        </main>
    )
}