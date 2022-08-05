import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

let Btn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == "blue" ? "white" : "black")};
  padding: 10px;
`;

function Detail(props) {
  let [num, setNum] = useState("");
  let [Alert, setAlert] = useState(true);

  useEffect(() => {
    let a = setTimeout(() => {
      setAlert((Alert = false));
    }, 5000);

    if (isNaN(num) == true) {
      alert("숫자를 입력해주세요.");
    }

    return () => {
      //useEffect 동작 전에 실행됨

      clearTimeout(a); //타이머 제거
    };
  }, [num]); // [] 추가 하면 mount 시 1회 코드실행, state 넣었을 시 state가 변경될 때 마다 코드실행

  let { id } = useParams();
  let item = props.shoes.find(function (x) {
    return x.id == id; //array자료의 id 와 url에 입력한 번호가 같은 경우(조건식)
  });

  return (
    <div className="container">
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
          <h4 className="pt-5">{item.title}</h4>
          <p>{item.content}</p>
          <p>{item.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
