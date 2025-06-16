import Joke from "./components/Joke"
import jokesData from "./jokesData"

export default function(){
    
    const jokeElements = jokesData.map((joke)=>{
        return <Joke setup={joke.setup}
              punchline={joke.punchline}></Joke>
    })
    console.log(jokeElements)
    return(
        <main>
            {jokeElements}
        </main>
    )
}

/* Respuestas a las preguntas del minuto 4:06:00
1- El método .map() "transforma" los elementos de un array a otro tipo de elemento según como lo programemos
2- En react, el método .map() suele usarse para facilitar la reutilización de componentes 
3- Porque nos ahorramos de escribir muchas líneas de código
*/