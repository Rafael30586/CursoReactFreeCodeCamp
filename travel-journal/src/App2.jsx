import Entry from "./components/Entry"
import './App.css'



export default function App2(){
    return(
        <>
            <header></header>
            <main className="container">
                <Entry 
                    img={{src: "https://res-4.cloudinary.com/jnto/image/upload/w_750,h_750,c_fill,f_auto,fl_lossy,q_auto/v1/media/filer_public/f8/02/f802e620-ebff-4c67-824a-f7198b95b21e/mount-fuji-banner_rchkty", 
                        alt: "Mount Fuji Photo"}}
                    country="Japan"
                    googleMapsLink="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
                    title="Mount Fuji"
                    dates="12 Jan, 2021 - 24 Jan, 2021"
                    text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."></Entry>
            </main>
    </>

    )
    
}

