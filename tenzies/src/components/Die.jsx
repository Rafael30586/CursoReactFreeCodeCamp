export default function Die(props){
    return(
        <button className={props.class} id={props.id} onClick={()=>{props.hold(props.nanoId)}}>{props.value}</button>
    )
}