import React from "react"

function Conditional(props) {
    /*if (props.isLoading) {
        return (
            <h1>Loading...</h1>
        )
    }*/
    return (
        <div>
            <h1>Navbar</h1>

            <h1>{props.isLoading ? "Loading..." : "Some Cool features of conditional rendering"}</h1>

            <footer><h1>This is my footer</h1></footer>
        </div>
    )
}

export default Conditional