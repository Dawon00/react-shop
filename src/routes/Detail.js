import { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { addItem } from "../store";
import { useDispatch } from "react-redux";

let Btn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg === "blue" ? "white" : "black")};
  padding: 10px;
`;

function Detail(props) {
  let [num, setNum] = useState("");
  let [Alert, setAlert] = useState(true);
  let [tab, setTab] = useState(0);
  let [fade1, setFade1] = useState("");
  let dispatch = useDispatch();
  useEffect(() => {
    setFade1("end");
    return () => {
      setFade1("");
    };
  }, []);

  let { id } = useParams();
  let item = props.shoes.find(function (x) {
    return x.id === id; //array자료의 id 와 url에 입력한 번호가 같은 경우(조건식)
  });

  useEffect(() => {
    let a = setTimeout(() => {
      setAlert((Alert = false));
    }, 5000);

    if (isNaN(num) === true) {
      alert("숫자를 입력해주세요.");
    }

    return () => {
      //useEffect 동작 전에 실행됨

      clearTimeout(a); //타이머 제거
    };
  }, [num]); // [] 추가 하면 mount 시 1회 코드실행, state 넣었을 시 state가 변경될 때 마다 코드실행

  return (
    <div className={"container start " + fade1}>
      <input
        onChange={(e) => {
          setNum(e.target.value);
        }}
      ></input>
      {Alert === true ? (
        <div className="alert alert-warning">남은 할인 시간 : 5초</div>
      ) : null}
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}원</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              dispatch(addItem({ id: 4, name: "Red Yordan", count: 5 }));
            }}
          >
            주문하기
          </button>
        </div>
      </div>
      <Nav fill variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(0);
            }}
            eventKey="link-0"
          >
            상품 상세
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(1);
            }}
            eventKey="link-1"
          >
            구매 안내
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(2);
            }}
            eventKey="link-2"
          >
            상품 후기
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(3);
            }}
            eventKey="link-3"
          >
            상품 문의{" "}
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
    </div>
  );
}

function TabContent({ tab }) {
  //tab state 가 변할 때 end를  start 옆에 추가
  let [fade, setFade] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);

    return () => {
      //useEffect 전에 실행

      setFade("");
    };
  }, [tab]);
  return (
    <div className={"start " + fade}>
      {
        [
          <div>내용0</div>,
          <div>내용1</div>,
          <div>내용2</div>,
          <div>내용3</div>,
        ][tab]
      }
    </div>
  );
}

export default Detail;
