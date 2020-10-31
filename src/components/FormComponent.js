import React from "react"

function FormComponent(props) {
    return (
        <div>
            <form>
                <label>First name </label>
                <input
                    placeholder="input your first name"
                    name="firstName"
                    value={props.firstName}
                    onChange={props.handleChange}/>
                <br/>
                <label>Last name </label>
                <input
                    placeholder="input your last name"
                    name="lastName"
                    value={props.lastName}
                    onChange={props.handleChange}/>
                <br/>
                <label>Age </label>
                <input
                    placeholder="input your age"
                    name="age"
                    value={props.age}
                    onChange={props.handleChange}/>
                <br/>
                <label>Gender</label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={props.gender === "male"}
                        onChange={props.handleChange}/> Male
                    </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={props.gender === "female"}
                        onChange={props.handleChange}/> Female
                </label>
                <br/>
                <label>Location </label>
                <select
                    name="location"
                    value={props.location}
                    onChange={props.handleChange}
                >
                    <option>--Choose a destiantion--</option>
                    <option>Paradise Island, Bahamas</option>
                    <option>Paris, France</option>
                    <option>Rome. Italy</option>
                </select>
                <br/>
                <label>Dietary Restrictions:</label>
                <br/>
                <label>
                    <input
                        type="checkbox"
                        name="isVegan"
                        onChange={props.handleChange}
                        checked={props.isVegan}
                    /> Vegan
                </label><br/>
                <label>
                    <input
                        type="checkbox"
                        name="isLactoseIntolerant"
                        onChange={props.handleChange}
                        checked={props.isLactoseIntolerant}
                    /> Lactose Intolerant
                </label><br/>
                <label>
                    <input
                        type="checkbox"
                        name="isNutAlergic"
                        onChange={props.handleChange}
                        checked={props.isNutAlergic}
                    /> Allergic to nuts
                </label><br/>
            </form>
            <br/>
            <h2>Entered information:</h2>
            <p>Name: {props.firstName} {props.lastName}</p>
            <p>Age: {props.age}</p>
            <p>Gender: {props.gender}</p>
            <p>Location: {props.location}</p>
            <div>Dietary restrictions:
                <p>Vegan: {props.isVegan? "yes" : "no"}</p>
                <p>Lactose intolerant: {props.isLactoseIntolerant? "yes" : "no"}</p>
                <p>Allergic to uts: {props.isNutAlergic? "yes" : "no"}</p>
            </div>
        </div>
    )

}

export default FormComponent