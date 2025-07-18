export default function Die(props){
    return(
        <button className="die" id={props.id}>{props.value}</button>
    )
}