import React, { useState } from 'react'

export default function App3(){
    let [isImportant, setIsImportant] = React.useState("Yes")
    
    function handleClick(){
        setIsImportant("Definitely")
    }

    return (
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button className="value" onClick={handleClick}>{isImportant}</button>
        </main>
    )
}