export default function Main(){
    const ingredients = ["Chicken","Oregano","Tomatoes"]
    const ingredientList = ingredients.map((ingredient)=>{
        return <li key={ingredient}>{ingredient}</li>
    })

    function submitForm(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        ingredients.push(newIngredient)
        console.log(ingredients)
    }
    
    return(
        <main>
            <form action="" className="add-ingredient-form" onSubmit={submitForm}>
                <input type="text" aria-label="Add ingredient" placeholder="eg: Oregano" name="ingredient"/>
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientList}
            </ul>
        </main>
    )
}