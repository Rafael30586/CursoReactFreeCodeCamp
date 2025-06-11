export default function Joke(props){
    return(
        <>
            <span className="setup">{props.setup}</span> <br />
            <span className="punchline">{props.punchline}</span> <br /> 
            <span>votes : {props.votes}</span> <br /> 
            <span> is pun : {props.isPun}</span> <br /> <br />
        </>
    )
}