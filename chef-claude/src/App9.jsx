import React from "react"
import Header9 from "./components/Header9"
import Body from "./components/Body"

export default function App9() {

    const [username, setUsername] = React.useState('Joe')

    return (
        <main>
            <Header9 name={username}/>
            <Body name={username}/>
        </main>
    )
}