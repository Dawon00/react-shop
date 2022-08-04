import "./App.css";
import { useState } from "react";
import { Container, Nav, Navbar, Row } from "react-bootstrap";
import data from "./data.js";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="main-bg"></div>

              <Container>
                <Row>
                  <Card shoes={shoes}></Card>
                </Row>
              </Container>
            </div>
          }
        ></Route>
        <Route path="/detail" element={<div>상세 페이지</div>}></Route>
      </Routes>
    </div>
  );
}

function Card(props) {
  return props.shoes.map((a, i) => {
    return (
      <div className="col-md-4">
        {" "}
        <img
          src={"https://codingapple1.github.io/shop/shoes" + (i + 1) + ".jpg"}
          width="80%"
          alt=""
        ></img>
        <h4>{a.title}</h4>
        <p>{a.content}</p>
        <p>{a.price}</p>
      </div>
    );
  });
}

export default App;
