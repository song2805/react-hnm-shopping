import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([])
  const [searchParams, setSearchParams] = useSearchParams();
  const [error,setError]=useState("")

  const getProducts = async () => {
    

    try {
    let keyword = searchParams.get("q") || "";
    console.log("searchParams 값은?",keyword);
    let url = `https://my-json-server.typicode.com/song2805/react-hnm-shopping/products?q=${keyword}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProductList(data);
    } catch (error) {
      setError(error.message);
    }
  };
  //API 호출은 useEffect에서 해줘요. useEffect는 2개의 parameters에서 가져갑니다. 첫째는 function, 두번째는 Array를 매개변수로 넣습니다.
  //getProducts()란 함수로 api 호출해 줄께요
  useEffect(() => {
    console.log("search",searchParams)
    console.log("get-q",searchParams.get("q"))
    getProducts();
  }, [searchParams]);


  return (
    <div>
      <Container>
         {/* productList에 있는 item의 갯수 만큼 ProductCard가 생기게 됩니다 */}
        <Row>
          {productList.map((item) => (
            <Col lg={3} md={6} sm={12} key={item.id}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll
