import pads from "./pads"
import React from "react"
import Pad from "./components/Pad"

export default function App10(props) {

    const [pad,setPad] = React.useState(pads)

    function toggle(id){
        setPad(prevPad=>{
            let padObject = {}
            let padArray = []
            for(let singlePad of prevPad){
                if(id===singlePad.id){
                    padObject = {
                        id: singlePad.id,
                        color: singlePad.color,
                        on: !singlePad.on
                    }
                    padArray.push(padObject)
                }else{
                    padArray.push(singlePad)
                }

            }
            //let someArray = []
            //someArray.push(padObject) 
            return padArray
            //return someArray
        })
    }

    const buttons = pad.map((button)=>{ // El estilo que se le pasa al botón es como objeto
        return <Pad toggle={toggle} turn={button.on} color={button.color} key={button.id} id={button.id}></Pad>
    })
    
    return (
        <main>
            <div className="pad-container">
                {buttons}
            </div>
        </main>
    )
}