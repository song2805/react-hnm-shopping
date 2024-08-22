import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";
import PrivateRoute from "./route/PrivateRoute";



// 프로젝트에서 할일 정리 To do list at the project
//1. 전체상품페이지, 로그인, 상품상세페이지
//1-1. 네비게이션 바 만들기
//2. 전체 상품페이지에서는 전체 상품을 볼 수 있다
//3. 로그인 버튼을 누르면 로그인 페이지가 나온다
//3. 상품디테일을 눌렀으나, 로인이 안되있을경우에는 로그인페이지가 먼저 나온다.
//4. 로그인이 되어있을 때는 상품디테일 페이지를 볼 수 있다.
//5. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
//5. 로그아웃이되면 상품 디테일페이지를 볼 수 없다, 다 로인 페이지가 보인다
//6. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다
//7. 상품을 검색할 수 있다.

function App() {
// State that tells you whether you are logged in or not(로그인을 한 유저인지 아닌지 알려주는 State)
// true is logged in, false is logged out
// authenticate 값을 바꿔주는 함수는 setAuthenticate 이다. 그럼 어떻게 true or false로 바꿔 줄 수 있을까?
// props로 배내버리면 됨!    <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>} /> 함수도 props로 보낼수 있답니다.
// useEffect(()=> {
//   console.log("AAA", authenticate);
// },[authenticate]);

const[authenticate, setAuthenticate]=useState(false) ;

useEffect(()=> {
  console.log("aaa", authenticate)
},[authenticate])

  return (

    <div>
        <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
        <Routes>
          <Route path="/" element={<ProductAll />} />
          <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>} />
          <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>} />
        </Routes>
      </div>
  );
}

export default App;


//진행상황 list
//1. 여러 페이지 처럼 보이도록, "리액트 라우터"를 설치한다.