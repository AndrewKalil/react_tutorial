import React, {Component} from "react"

/*function App() {
    return (
        <div>
            <Header/>
            <Greeting/>
        </div>
    )
}*/
class App extends React.Component {
    Header
    render () {
        return (
            <div>
                <Header username="Andrew"/>
                <Greeting/>
            </div>
            )
        }
}

class Header extends React.Component {
    render () {
        return (
            <header>
                <p>Welcome, {this.props.username}!</p>
            </header>
        )
    }
}

class Greeting extends React.Component {
    render() {
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay

        if (hours < 12) {
            timeOfDay = "morning"
        } else if (hours >= 12 && hours <= 17) {
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "night"
        }
        return (
            <h1>Good {timeOfDay} to you, fellow RecipEater!</h1>
        )
    }
}

export default App