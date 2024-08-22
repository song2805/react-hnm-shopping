import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Container} from 'react-bootstrap'

const ProductCard = ({ item }) => {
    const navigate =useNavigate()
    const showDetail=()=>{
        navigate(`product/${item.id}`)
    }
    return (
        <Container className='card-container'>
             <div className="product-card" onClick={showDetail}>
            <img className="item-images" src={item?.img} />
            <div>{item?.choice ? "Conscious choice" : ""}</div>
            <div>{item?.title}</div>
            <div>${item?.price}</div>
            <div>{item.new ? "New" : ""}</div>
        </div>
        </Container>
       
    )
}

export default ProductCard

// card에 들어갈것 Lists
// 1. image
// 2. choice
// 3. title
// 4. price
// 5. new or latest