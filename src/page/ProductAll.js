import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';

const ProductAll = () => {
  const [productList, setProductList] = useState([])

  const getProducts = async () => {
    let url = `http://localhost:4000/products`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProductList(data);
  };
  //API 호출은 useEffect에서 해줘요. useEffect는 2개의 parameters에서 가져갑니다. 첫째는 function, 두번째는 Array를 매개변수로 넣습니다.
  useEffect(() => {
    //getProducts()란 함수로 api 호출해 줄께요
    getProducts();
  }, [])


  return (
    <div>
      <Container>
         {/* productList에 있는 item의 갯수 만큼 ProductCard가 생기게 됩니다 */}
        <Row>
          {productList.map((menu) => (

            <Col lg={3}>
              <ProductCard item={menu} />
            </Col>
          ))}


         
       


        </Row>
      </Container>
    </div>
  )
}

export default ProductAll
