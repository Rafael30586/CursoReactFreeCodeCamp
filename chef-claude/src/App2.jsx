export default function App2(){

    function handleClick(){
        console.log("I was clicked");
    }

    function handleHover(){
        console.log("I'm an image")
    }

    return(
        <main className="container">
            <img
                src="https://picsum.photos/640/360"
                alt="Placeholder image from Picsum"
                onMouseOver={handleHover}
            />
            <button onClick={handleClick}>Click me</button>
        </main>
    )
}