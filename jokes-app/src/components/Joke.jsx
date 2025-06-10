export default function Joke(props){
    return(
        <>
            <span className="setup">{props.setup}</span> <br />
            <span className="punchline">{props.punchline}</span> <br /> <br />
        </>
    )
}