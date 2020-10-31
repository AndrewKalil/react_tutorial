import React from "react"
import FormComponent from "./FormComponent"

class Form extends React.Component{
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            location: "",
            isNutAlergic: false,
            isLactoseIntolerant: false,
            isVegan: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ?
            this.setState({
                [name]: checked
            })
            :
            this.setState({
                [name]: value
            })
    }

    render() {
        return (
            <FormComponent
                handleChange={this.handleChange}
                {...this.state}
        />
        )
    }
}

export default Form