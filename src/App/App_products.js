import React from "react"
import schoolProducts from "../Data/vschoolProducts"
import Products from "../components/Products"

function App() {
    const productComponents = schoolProducts.map(product => <Products
        key={product.id}
        name={product.name}
        price={product.price}
        description={product.description}
    />)
    return (
        <div className="productList">
            {productComponents}
        </div>
    )
}

export default App