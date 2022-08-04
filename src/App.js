import "./App.css";
import { useState } from "react";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import data from "./data.js";

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

      <Container>
        <Row>
          <Col>
            <Item />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function Item() {
  let [shoes] = useState(data);
  const renderItem = shoes.map((shoe) => {
    return (
      <div>
        {" "}
        <img
          src="https://codingapple1.github.io/shop/shoes1.jpg"
          width="80%"
          alt=""
        ></img>
        <h4>{shoe.title}</h4>
        <p>{shoe.content}</p>
        <p>{shoe.price}</p>
      </div>
    );
  });
  return <div>{renderItem}</div>;
}

export default App;
