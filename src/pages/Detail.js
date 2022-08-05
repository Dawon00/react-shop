import { useParams } from "react-router-dom";

function Detail(props) {
  let { id } = useParams();
  let item = props.shoes.find(function (x) {
    return x.id == id; //array자료의 id 와 url에 입력한 번호가 같은 경우(조건식)
  });

  return (
    <div className="container">
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
