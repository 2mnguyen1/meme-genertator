import React from "react"
import memeData from "../memesData.js"

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "Empty",
        bottomText: "Empty",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memeData);


    function randomImg() {
        let memeArr = allMemeImages.data.memes;
        let random = Math.floor(Math.random() * memeArr.length + 1);
        let url = memeArr[random].url;
        setMeme( preMeme => ({
            ...meme,
            randomImage: url
        }))
    }
    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button
                    onClick={randomImg}
                    className="form--button"
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img className="meme-img" src={meme.randomImage}/>
        </main>
    )
}
