import React from "react"

class App extends React.Component{
    /*constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <h2>{this.state.value}</h2>
            </div>
        );
    }*/
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: true,
            gender: "<choose a gender>",
            favColor: "<choose a colo>"
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    name="firstName"
                    value={this.state.firstName}
                    placeholder="First Name"
                    onChange={this.handleChange}/>
                <br/>
                <input
                    type="text"
                    name="lastName"
                    value={this.state.lastName}
                    placeholder="Last Name"
                    onChange={this.handleChange}/>
                <br/>
                <textarea
                    value={"some default value"}
                    onChange={this.handleChange}/>
                <br/>
                <label>
                    <input
                        type="checkbox"
                        name="isFriendly"
                        checked={this.state.isFriendly}
                        onChange={this.handleChange}/>
                </label> Is friendly
                <br/>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}/>
                </label> Male
                <br/>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}/>
                </label> Female
                <br/>
                {/*Formik is a special library that saves the trouble of coding forms from scratch*/}
                <label>Favorite Color:</label>
                <select
                    value={this.state.favColor}
                    onChange={this.handleChange}
                    name="favColor"
                >
                    <option>red</option>
                    <option>yellow</option>
                    <option>green</option>
                    <option>pink</option>
                    <option>white</option>
                    <option>black</option>
                    <option>purple</option>
                    <option>blue</option>
                </select>
                <h2>{this.state.firstName} {this.state.lastName}</h2>
                <h2>You are a {this.state.gender}</h2>
                <h2>Favorite color is {this.state.favColor}</h2>

            </form>
        )
    }
}

export default App