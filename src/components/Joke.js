import React from "react"

function Joke(props) {
    if (!props.question) {
        return (
            <div className="jokeCard">
                <div className="questionDiv">
                    <h3>{props.punchline}</h3>
                </div>
            </div>
        )
    }
    return (
        <div className="jokeCard">
            <div className="questionDiv">
                <h3 style={{display: props.question? "block" : "none"}}>Question: {props.question}</h3>
            </div>
            <div className="punchlineDiv">
                <h4 style={{color: props.question? "white" : "green"}}>Answer: {props.punchline}</h4>
            </div>
        </div>
    )
}

export default Joke