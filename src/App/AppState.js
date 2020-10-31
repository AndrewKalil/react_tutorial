import React from "react"

/*class App extends React.Component {
    constructor () {
        super()
        this.state = {
            answer: "yes"
        }
    }
    render () {
        return (
            <div>
                <h1>Is state important to know? {this.state.answer}</h1>
            </div>
        )
    }
}*/
class App extends React.Component {
    constructor () {
        super()
        this.state = {
            count: 2
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick () {
        this.setState(prevState => {
            return {
                count: prevState.count  * prevState.count
            }
        })
    }
    render () {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change!</button>
            </div>
        )
    }
}

export default App