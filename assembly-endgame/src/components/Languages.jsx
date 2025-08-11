import {languages} from '../languages'

export default function Languages(){
    const languageBadges = languages.map(language=>{
            return <span style={{backgroundColor:language.backgroundColor,color:language.color}} className='languageBadge'>{language.name}</span>
        })
    return(
        <section id='languages'>
            {languageBadges}
        </section>
    )
}