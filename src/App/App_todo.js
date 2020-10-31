import React from "react"
import todoData from "../Data/todoData"
import TodoItem from "../components/TodoItem"

class App extends React.Component {
    constructor () {
        super()
        this.state = {
            todos: todoData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(id) {
        //console.log("changed", id)
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                console.log(todo)
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
    render () {
        const todoItems = this.state.todos.map(task => <TodoItem
            id={task.id}
            taskName={task.text}
            completed={task.completed}
            handleChange={this.handleChange}/>)
        return (
            <div className="TodoList">
                {todoItems}
            </div>
        )
    }
}

export default App