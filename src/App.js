import "./App.css";
import { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar, Row } from "react-bootstrap";
import data from "./data.js";
import Detail from "./routes/Detail.js";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import axios from "axios";
import Cart from "./routes/Cart.js";
import { useQuery } from "react-query";

function App() {
  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify([]));
  }, []);

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  //서버에서 사용자 이름 가져오기(자동 refetch)
  let username = useQuery("username", () => {
    return (
      axios.get("https://codingapple1.github.io/userdata.json").then((a) => {
        return a.data;
      }),
      { staleTime: 2000 }
    ); //refetch 간격 2초 설정
  });

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/about");
              }}
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/event");
              }}
            >
              Event
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              Cart
            </Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link>
              {username.isLoading
                ? "loading..."
                : "환영합니다, " + username.data.name + "님 !"}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div>
                <div className="main-bg"></div>

                <Container>
                  <Row>
                    <Card shoes={shoes} navigate={navigate}></Card>
                  </Row>
                </Container>
              </div>
              <button
                onClick={() => {
                  axios
                    .get("https://codingapple1.github.io/shop/data2.json")
                    .then((x) => {
                      console.log(x.data);
                      setShoes(shoes.concat(x.data));
                      //let copy = [...shoes, ...x.data];
                      //setShoes(copy);
                    })
                    .catch(() => {
                      console.log("fail");
                    });
                }}
              >
                버튼
              </button>
            </>
          }
        ></Route>
        <Route path="/detail/:id" element={<Detail shoes={shoes} />}></Route>
        <Route path="/about" element={<About />}>
          <Route path="member" element={<Member />}></Route>
          <Route path="location" element={<Location />}></Route>
        </Route>

        <Route path="/event" element={<EventPage />}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>}></Route>
          <Route path="two" element={<p>생일기념 쿠폰받기</p>}></Route>
        </Route>
        <Route path="/cart" element={<Cart />} />

        <Route path="*" element={<div>404</div>}></Route>
      </Routes>
    </div>
  );
}

function EventPage() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Member() {
  return <div>member list</div>;
}
function Location() {
  return <div>location</div>;
}

function About() {
  let navigate = useNavigate();

  return (
    <div>
      <Button
        onClick={() => {
          navigate("/about/member");
        }}
      >
        member
      </Button>
      <Button
        onClick={() => {
          navigate("/about/location");
        }}
      >
        location
      </Button>

      <Outlet></Outlet>
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
          onClick={() => {
            props.navigate("/detail/" + i);
          }}
        ></img>
        <h4>{a.title}</h4>
        <p>{a.content}</p>
        <p>{a.price}</p>
      </div>
    );
  });
}

export default App;
