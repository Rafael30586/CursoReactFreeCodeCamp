//import starFilled from "src/assets/star-filled.png"
//import starEmpty from "src/assets/star-empty.png"


export default function Star(props){

    let starFilled = "src/assets/star-filled.png"
    let starEmpty = "src/assets/star-empty.png"

    let starIcon = props.isFilled ? starFilled : starEmpty
    return(
        <button
            aria-pressed={props.isFilled}
            aria-label={props.isFilled}
            className="favorite-button"
            onClick={props.toggleImage}
        >
            <img
                src={starIcon}
                alt={props.isFilled ? "filled star icon" : "empty star icon"}
                className="favorite"
            />
        </button>

    )
} 