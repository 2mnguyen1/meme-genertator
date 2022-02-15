import React from "react"
import memeData from "../memesData.js"

export default function Meme() {
    const [memeImage, setMemeImage] = React.useState("");

    function randomImg() {
        let memeArr = memeData.data.memes;
        let random = Math.floor(Math.random() * memeArr.length + 1);
        let imgURL = memeArr[random].url;
        setMemeImage(imgURL)
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
            <img className="meme-img" src={memeImage}/>
        </main>
    )
}
