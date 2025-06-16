export default function Entry(props){
    return (
        <article> 
            <div>
                <img className="paisaje" src={props.entry.img.src} alt={props.entry.img.alt} />
            </div>
            
            <div className="card"> 
                <div>
                    <img className="marker" src="/src/assets/marker.png" alt="marker" />
                    <span className="country-name">{props.entry.country}</span>
                    <a className="google-maps" href={props.entry.googleMapsLink}>View on google maps</a>
                </div>
                <h2>{props.entry.title}</h2>
                <h6>{props.entry.dates}</h6>
                <p>
                    {props.entry.text}
                </p>
            </div>
        </article>

    )
}

//https://res-4.cloudinary.com/jnto/image/upload/w_750,h_750,c_fill,f_auto,fl_lossy,q_auto/v1/media/filer_public/f8/02/f802e620-ebff-4c67-824a-f7198b95b21e/mount-fuji-banner_rchkty