import pads from "./pads"
import React from "react"
import Pad from "./components/Pad"

export default function App10(props) {

    const [pad,setPad] = React.useState(pads)

    

    const buttons = pad.map((button)=>{ // El estilo que se le pasa al botón es como objeto
        return <Pad turn={button.on} color={button.color}></Pad>
    })
    
    return (
        <main>
            <div className="pad-container">
                {buttons}
            </div>
        </main>
    )
}