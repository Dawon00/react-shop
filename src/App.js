import "./App.css";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <div>
        <Row>
          <Col sm>
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="80%"
              alt=""
            ></img>
            <h4>상품명</h4>
            <p>상품 소개</p>
          </Col>
          <Col sm>
            <img
              src="https://codingapple1.github.io/shop/shoes2.jpg"
              width="80%"
              alt=""
            ></img>
            <h4>상품명</h4>
            <p>상품 소개</p>
          </Col>
          <Col sm>
            <img
              src="https://codingapple1.github.io/shop/shoes3.jpg"
              width="80%"
              alt=""
            ></img>
            <h4>상품명</h4>
            <p>상품 소개</p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
