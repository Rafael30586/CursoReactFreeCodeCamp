import React from "react"
//import avatar from "src/assets/user9.png"

let avatar = "src/assets/user9.png"

export default function Header9(props) {
    //const [userName, setUserName] = React.useState("Joe")

    return (
        <header>
            <img src={avatar} />
            <p>{props.name}</p>
        </header>
    )
}