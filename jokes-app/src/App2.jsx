

export default function App2(){
    const ninjaTurtles = ["Donatello","Michelangelo","Leonardo","Rafael"] 
    const jsxTurtles = ninjaTurtles.map((ninjaTurtle) => <h2>{ninjaTurtle}</h2>)
    return(
        <main>
            {jsxTurtles}
        </main>
    )
}