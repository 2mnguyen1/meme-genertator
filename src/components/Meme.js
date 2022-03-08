import React from "react"
import memeData from "../memesData.js"

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memeData);

    function randomImg() {
        let memeArr = allMemeImages.data.memes;
        let random = Math.floor(Math.random() * memeArr.length + 1);
        let url = memeArr[random].url;
        setMeme( prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme( prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    const [texts, setText] = React.useState({
        top: "",
        bot: ""
    })

    function handleSubmit(event) {
        event.preventDefault()
        setText({
            top: meme.topText,
            bot: meme.bottomText
        })
    }

    return (
        <main>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button
                    onClick={randomImg}
                    className="form--button"
                >
                    Get a new meme image 🖼
                </button>
            </form>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{texts.top}</h2>
                <h2 className="meme--text bottom">{texts.bot}</h2>
            </div>
        </main>
    )
}
