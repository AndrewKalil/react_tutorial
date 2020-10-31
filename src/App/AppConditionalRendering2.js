import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: true
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        //alert("I was clicked")
        this.setState(prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }

    render() {
        return (
            <div>
                <h3>You are currently logged {this.state.isLoggedIn? "in": "out"}</h3>
                <button onClick={this.handleClick}>{this.state.isLoggedIn? "Log Out" : "Log In"}</button>
            </div>
        )
    }
}

export default App