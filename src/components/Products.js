import React from "react"

function Products(props) {
    return (
        <div className="productCard">
            <h3>{props.name}</h3>
            <p>{props.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}
                {" "}- {props.description}</p>
        </div>
    )
}

export default Products