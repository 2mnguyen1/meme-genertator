import React from "react"

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [memes, setMemes] = React.useState([]);

    React.useEffect( () => {

        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setMemes(data.data.memes)
        }
        getMemes()


    }, [])

    function randomImg() {
        let random = Math.floor(Math.random() * memes.length + 1);
        let url = memes[random].url;
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
