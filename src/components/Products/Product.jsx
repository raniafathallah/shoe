import React from 'react'

const Product = ({item}) => {
    return (
        <div>
             <div className="productBlock">
                    <p>{item.country}</p>
                    <h1>{item.name}</h1>
                    <img src={item.imageUrl}/>
                    <h2>${item.price}</h2>
                    <h3>Size:{item.size}</h3>
            </div>
        </div>
    )
}
export default Product
