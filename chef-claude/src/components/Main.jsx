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

    function section(){
        return (
            <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredients}</ul>
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>
            </section>
        )
    }
    
    return(
        <main>
            <form action={addIngredient} className="add-ingredient-form" >
                <input type="text" aria-label="Add ingredient" placeholder="eg: Oregano" name="ingredient"/>
                <button>Add ingredient</button>
            </form>
            {ingredients.length >= 1 && <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredients}</ul>
                {ingredients.length >= 4 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>}
            </section>}
            
        </main>
    )
}