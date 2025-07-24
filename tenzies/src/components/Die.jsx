export default function Die(props){
    return(
        <button className={props.class} id={props.id}>{props.value}</button>
    )
}