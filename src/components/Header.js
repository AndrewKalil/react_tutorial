import React from "react"

function Header () {
    return (
        <header className="myPageHeader">
            <img
                src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
                alt="Problem?"
                className="myPageLogo"
            />
            <h1
                style={{
                    marginLeft: "35%",
                    fontFamily: "monospace",
                    fontStyle: "normal",
                    fontSize: "50px"
                }}
            >Meme Generator</h1>
        </header>
    )
}

export default Header