import React from 'react'
import { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Container,Row,Col,Dropdown,Button } from 'react-bootstrap'

const ProductDetail = () => {
  let{id} = useParams();
  const[product,setProduct]=useState(null)
  const getProductDetail= async ()=>{
    let url = `https://my-json-server.typicode.com/song2805/react-hnm-shopping/products/${id}`
    let response = await fetch(url)
    let data = await response.json();
    console.log("data:", data)
    setProduct(data)
  }
  useEffect(()=>{
    getProductDetail()
  },[])
  return (
    
     <Container >
      <Row>
        <Col className="product-img">
        <img className="item-images" src={product?.img} />
        </Col>
        <Col>
        <div className='info'>
          {product?.title}
        </div>
        <div className='info'>₩{product?.price}</div>
        <div className='info'>{product?.choice === true ? "Conscious choice" : ""}</div>
      <div className='info-drop'>
      <Dropdown>
      <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
        사이즈 선택
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {product?.size.length > 0 && product?.size.map((item)=>(
          <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
      </div>
      <div>
      <Button  className='info-add' variant="dark">ADD</Button>
      </div>
        </Col>
      </Row>
     </Container>
  )
}

export default ProductDetail
