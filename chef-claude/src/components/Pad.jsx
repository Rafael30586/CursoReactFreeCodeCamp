import React from "react"

export default function Pad(props){
    const [on,setOn] = React.useState(props.turn)

    let background = {
        backgroundColor:props.color
    }


    function toggleButton(){
        setOn((prevOn)=>!prevOn)
    }

    return (
        <button onClick={() => props.toggle(props.id)} className={props.turn ? "on" : "off"} style={background}></button>
    )

}