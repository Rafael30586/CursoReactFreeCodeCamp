export default function IngredientsList(props){
    return(
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{props.ingredients}</ul>
            {props.ingredients.length >= 4 && <div className="get-recipe-container">
                <div ref={props.ref}>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={props.showRecipe}>Get a recipe</button>
            </div>}
        </section>
    )
}