import React from "react"

export default function App2(props) {
    const [starWarsData, setStarWarsData] = React.useState(null)
    const [count, setCount] = React.useState(0)

    console.log("Rendered!")
    
    React.useEffect(()=>{
        fetch("https://swapi.info/api/planets/1")
        .then(response => response.json())
        .then( data => setStarWarsData(data))
    },[])
    
    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}