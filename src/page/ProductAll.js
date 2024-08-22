import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([])
  const [query, setQuery] = useSearchParams();
  const [error,setError]=useState("")

  const getProducts = async () => {
    let keyword = query.get("q") || "";
    // console.log("query 값은?",searchQuery);
    let url = `http://localhost:4000/products?q=${keyword}`;

    try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProductList(data);
    } catch (error) {
      setError(error.message);
    }
  };
  //API 호출은 useEffect에서 해줘요. useEffect는 2개의 parameters에서 가져갑니다. 첫째는 function, 두번째는 Array를 매개변수로 넣습니다.
  useEffect(() => {
    //getProducts()란 함수로 api 호출해 줄께요
    getProducts();
  }, [query]);


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
