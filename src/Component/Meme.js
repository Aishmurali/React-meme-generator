import React, { useEffect, useState } from "react"

export default function Meme() {

    const [meme, setMeme] = useState({
        firstText: "",
        lastText: "",
        randomImage: "https://i.imgflip.com/1ur9b0.jpg"


    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        console.log("useEffect called")
        fetch("https://api.imgflip.com/get_memes")
            .then((res) => res.json())
            .then((data) => setAllMemes(data.data.memes))
    }, [])


    function getRandomImage() {
        const count = allMemes.length
        console.log("COUNT:::::", count)



        const randImg = allMemes[Math.floor((Math.random() * 100))]
        console.log("Random image", randImg)
        const url = randImg.url
        console.log("URL:::::", url)

        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImage: url
        }))

    }

    function handleChange(event) {
        const { name, value } = event.target
        console.log("TARGET VALUE::", event.target)
        setMeme((prevMeme) => ({
            ...prevMeme,
            [name]: value
        }))

    }
    return (

        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Enter value "
                    className="form-input"
                    name="firstText"
                    value={meme.firstText}
                    onChange={handleChange} />
                <input
                    type="text"
                    placeholder="Enter value "
                    className="form-input"
                    name="lastText"
                    value={meme.lastText}
                    onChange={handleChange} />

                <button className="form-button" onClick={getRandomImage}>Generate new meme</button>

            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme-image" alt="meme" />
                <h2 className="meme-text top">{meme.firstText}</h2>
                <h2 className="meme-text bottom">{meme.lastText}</h2>

            </div>
        </main>
    );
}
