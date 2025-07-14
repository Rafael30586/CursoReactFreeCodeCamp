import React from "react"

export default function App2(props) {
    const [starWarsData, setStarWarsData] = React.useState(null)
    const [count, setCount] = React.useState(1)

    console.log("Rendered!")
    
    React.useEffect(()=>{
        fetch(`https://swapi.info/api/people/${count}`)
        .then(response => response.json())
        .then( data => setStarWarsData(data))
    },[count])
    
    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Get next character</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}

/*
Preguntas del segundo 10:41:23
1. - Los componentes de react son funciones puras porque devuelven siempre el mismo valor de acuderdo a los props que reciban, ejemplo: si un componente 
recibe un número 350 como props y devulve un true, entonces devolverá un true siempre que reiba 350
- renderizar un componente en react nunca tendrá un efecto colateral en ningún sistema externo
2. Un efecto colateral o side effect es cualquier código que afecte o interactúe con un sistema externo. Ejemplos: local sotarge, conexiones con APIs, websockets,
manipulación del DOM
3. Cualquier cosa de la que react esté a cargo no es un side effect, por ejemplo: mantener un estado, mantener la UI in sincronización con la información, 
renderizar elementos del DOM
4. -useEffect se ejecuta tan pronto como el componente renderiza por primera vez
- cada vez que se re-renderice el componente (asumiendo que no hay un array de dependencias)
- No se va a ejecutar cuando el valor de las dependencias sea el mismo después de re-renderizar
5. El array de dependencias de useeffect es el que va a determinar si la función callback se ejecuta o no
*/