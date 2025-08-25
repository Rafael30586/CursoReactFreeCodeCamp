import {languages} from '../languages'


export default function Languages(props){
    const languageBadges = languages.map((language,index)=>{
            if(index<props.wrongGuessCount){
                return <span style={{backgroundColor:language.backgroundColor,color:language.color}} className='languageBadge lost'>{language.name}</span>
            }
            return <span style={{backgroundColor:language.backgroundColor,color:language.color}} className='languageBadge'>{language.name}</span>
        })
    return(
        <section id='languages'>
            {languageBadges}
        </section>
    )
}