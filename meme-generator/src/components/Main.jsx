import React from "react"

export default function Main() {

    const[meme,setMeme] = React.useState({
        topText:"One does not simply",
        bottomText:"walk into Mordor",
        imageUrl:"http://i.imgflip.com/1bij.jpg"
    })

    function handleChange(e){ // En react, caundo pasamos un argumento a funa función de esta manera, es un evento del cual podemos tomar información
        const {value} = e.currentTarget
        setMeme(prevMeme=>{
            return{
                ...prevMeme,
                topText: value
            }
        })
    }


    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}