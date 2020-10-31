import React from "react"

function handleMouse() {
    alert("Get your dirty hands off me you prick")
}
function App() {
    return (
        <div>
            <img src="https:www.fillmurray.com/200/100" alt="fill murray"/>
            <br/>
            <br/>
            <button onClick={handleMouse}>Click Me</button>
        </div>
    )
}

export default App