import React from "react"

export default function Main(){
    /*const ingredients = ["Chicken","Oregano","Tomatoes"]
    const ingredientList = ingredients.map((ingredient)=>{
        return <li key={ingredient}>{ingredient}</li>
    })*/

    const [ingredients, setIngredients] = React.useState([])


    function addIngredient(formData){
        const newIngredient = formData.get("ingredient")
        setIngredients((prevIngredients)=>{
            return [...prevIngredients,<li key={newIngredient}>{newIngredient}</li>]
        })
        //ingredients.push(newIngredient)
        //console.log(ingredients)
    }
    
    return(
        <main>
            <form action={addIngredient} className="add-ingredient-form" >
                <input type="text" aria-label="Add ingredient" placeholder="eg: Oregano" name="ingredient"/>
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredients}
            </ul>
        </main>
    )
}