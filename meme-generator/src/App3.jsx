import WindowTracker from "./components/WindowTracker";
import React from "react";

export default function App() {

    const[show,setShow] = React.useState(true)
    /**
     * Challenge:
     * 1. Create state called `show`, default to `true`
     * 2. When the button is clicked, toggle `show`
     * 3. Only display `<WindowTracker>` if `show` is `true`
     */

    function toggleShow(){
        setShow(prevShow=>{
            return !prevShow
        })
    }
    
    return (
        <main className="container">
            <button onClick={toggleShow}>
                {show ? "show":"not show"}
            </button>
            {show && <WindowTracker />}
        </main>
    )
}