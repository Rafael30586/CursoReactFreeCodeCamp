export default function App5(){

    const isGoingOut = true

    return(
        <main>
            <h1 className="title">Do i feel like going out tonight?</h1>
            <button className="value">{isGoingOut ? "Yes" : "No"}</button>
        </main>
    )
}