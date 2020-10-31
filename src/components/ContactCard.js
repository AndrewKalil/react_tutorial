import React from "react"

function ContactCard(props) {

    return (
        <div className="contactCard">
            <img className="catImages" src={props.contact.imgUrl} alt="cat"/>
            <h3>{props.contact.name}</h3>
            <p>Phone: {props.contact.phone}</p>
            <p>email: {props.contact.email}</p>
        </div>
    )
}

export default ContactCard