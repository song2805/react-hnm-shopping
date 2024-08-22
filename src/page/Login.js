import React from 'react'
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate()

  const loginUser = (event) => {
    event.preventDefault();
    console.log("login user function issue")
    setAuthenticate(true);
    navigate("/");
  }
  return (
    <Container className="main-container">
      <Form className='login-container' onSubmit={(event) => loginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="danger" type="submit">
          Login
        </Button>
      </Form>

    </Container>
  )
}

export default Login

// Form 자체에서 주는 even 가 있다.  
// Form 을 쓸때는, 항상 event.preventDefault(); 을 사용해줘요.
// 위의 <Button type="submit">Login </Button> 에 type 이 submit일 때,
// onClick 이 아닌 onSubmit을 사용해야 한다.
// onSubmit : '양식 제출 이벤특 발생할 때의 동작을 지정한다' 연결된 함수에서 true를 반환하면 form 이 전송되고, false를 반환한다면 form이 전송되지 않게 한다.
// form이 refresh 하는 것을 막아줘야한다. form 자체에서 주는 event 가 있다. (event.preventDefault();) event를 매개변수(parameter value)로 받아온다.