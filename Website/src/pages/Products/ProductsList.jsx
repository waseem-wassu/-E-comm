import React from 'react'
import "./product.css"
const ProductsList = ({ProductLists}) => {
    return (
        <div className="img-container">
            {
                ProductLists.map(product => {
                    return (
                        <div>
                            <img src={product.img} alt="pro" className="product-img" />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductsList
