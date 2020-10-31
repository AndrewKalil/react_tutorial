import React, {Component} from "react"
import Conditional from "../components/Conditional"

class App extends Component {
    constructor() {
        super()
        this.state = {
            unreadMeassages: [
                "Call your mom!",
                "New spam email available. All links are definitely safe to click."
            ]
        }
    }


    /*componentDidMount() {
        // GET the data I need to correctly display
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }*/

    render() {
        return (
            <div>
                {this.state.unreadMeassages.length > 0 &&
                <h2>You have {this.state.unreadMeassages.length} unread messages!</h2>}
            </div>
            // the && can be used in place of if statement because javascript does the following:
            // true && false: checks if left is true then use statement to the right ==> false
            // true && true: same thing as above ==> true
            // false && true: checks left first and stops there if is false ==> false
            // false && false: same as above ==> false

        )
    }
}

export default App