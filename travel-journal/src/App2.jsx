import Entry from "./components/Entry"
import './App.css'
import data from "./data"



export default function App2(){
    const entryElements = data.map((entry)=>{
/*
        return <Entry img={location.img}
               country={location.country}
               googleMapsLink={location.googleMapsLink}
               title={location.title}
               dates={location.dates}
               text={location.text}></Entry>*/
        return <Entry key={location.id}
                      entry={entry}>
               </Entry>
    
    })
    return(
        <>
            <header></header>
            <main className="container">
                {entryElements}
            </main>
    </>

    )
    
}

