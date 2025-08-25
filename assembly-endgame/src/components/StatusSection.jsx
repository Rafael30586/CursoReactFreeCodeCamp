export default function StatusSection(props){

    function returnStatus(){
        if(props.isGameWon){
            return (
                <section className="status-section won-game">
                <span>You win!</span><br />
                <span>Well done! &#10024;</span>
                </section>
            )
        }else if(props.isGameLost){
            return(
                <section className="status-section lost-game">
                <span>Game over</span><br />
                <span>You better start learning assembly</span>
                </section>
            )
        }else{
            return(
                <section className="status-section">

                </section>
            )
        }

    }

    return(
        returnStatus()
    )
}