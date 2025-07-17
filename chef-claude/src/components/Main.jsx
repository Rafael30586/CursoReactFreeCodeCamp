import React, { useRef } from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromMistral } from "../../ai"

export default function Main(){
    /*const ingredients = ["Chicken","Oregano","Tomatoes"]
    const ingredientList = ingredients.map((ingredient)=>{
        return <li key={ingredient}>{ingredient}</li>
    })*/

    const [ingredients, setIngredients] = React.useState([])
    const [recipeShown, setRecipeShown] = React.useState(false)
    const [recipe, setRecipe] = React.useState()

    const recipeSection = useRef(null)
    console.log(recipeSection)


    function addIngredient(formData){
        const newIngredient = formData.get("ingredient")
        setIngredients((prevIngredients)=>{
            return [...prevIngredients,<li key={newIngredient}>{newIngredient}</li>]
        })
        //ingredients.push(newIngredient)
        //console.log(ingredients)
    }

    function showRecipe(){
        setRecipeShown(true)
        setRecipe(prevRecipe => {
            return getRecipeFromMistral(ingredients)
        })
    }

    React.useEffect(()=>{
        if(recipe !== "" && recipeSection.current !== null){
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    },[recipe])

    
    return(
        <main>
            <form action={addIngredient} className="add-ingredient-form" >
                <input type="text" aria-label="Add ingredient" placeholder="eg: Oregano" name="ingredient"/>
                <button>Add ingredient</button>
            </form>
            {ingredients.length >= 1 && <IngredientsList ref={recipeSection} ingredients={ingredients} showRecipe={showRecipe}></IngredientsList>}
            {recipeShown && <ClaudeRecipe recipe={recipe}></ClaudeRecipe>}
        </main>
    )
}