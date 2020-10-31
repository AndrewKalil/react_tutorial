import React from "react"

/*class App extends React.Component {
    constructor () {
        super()
        this.state = {
            name: "Andrew",
            age: 21
        }
    }
    render () {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age} years old</h3>
            </div>
        )
    }
}*/

class App extends React.Component {
    constructor () {
        super()
        this.state = {
            isLoggedIn: true
        }
    }
    render () {
        return (
            <div>
                <h1>You are currently logged {this.state.isLoggedIn? "in" : "out"}</h1>
            </div>
        )
    }
}

export default App