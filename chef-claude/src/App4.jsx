import React from "react"

export default function App4(){
    const [count,setCount] = React.useState(0)

    function add(){
        setCount(prevCount=>prevCount + 1)
    }

    function sustract(){
        setCount(prevCount=>prevCount - 1)
    }

    
    return(
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button className="minus" aria-label="Decrease count" onClick={sustract}>-</button>
                <h2 className="count">{count}</h2>
                <button className="plus" aria-label="Increase count" onClick={add}>+</button>
            </div>
        </main>
    )
}

//Respuestas a preguntas del segundo 5:48:58

/* 
1. Una callback function o el nuevo state
2. Cuando nos importa el valor previo del state y lo necesitamos para determinar su nuevo valor
3. Caundo no nos importa el valor previo del state, simplemente queremos el nuevo valor del state
*/