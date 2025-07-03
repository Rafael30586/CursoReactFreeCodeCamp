import React from "react"

export default function Pad(props){
    const [on,setOn] = React.useState(props.turn)

    let background = {
        backgroundColor:props.color
    }

    function toggleOn(){
        if(props.on){
            setOn(true)
        }else{
            setOn(false)
        }
    }

    function toggleButton(){
        setOn((prevOn)=>!prevOn)
    }

    return (
        <button onClick={toggleButton} className={on ? "on" : "off"} style={background}></button>
    )

}