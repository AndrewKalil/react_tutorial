import React from "react"

function TodoItem (props) {
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={props.completed}
                onChange={() => props.handleChange(props.id)}/>
            <p className="CheckBoxText" style={props.completed? completedStyle: null}>{props.taskName}</p>
        </div>
    )
}

export default TodoItem