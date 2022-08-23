import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import { changeName, increase, addCount } from "../store";

function Cart() {
  let state = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();

  return (
    <div>
      {state.user.name}의 장바구니
      {state.user.age}
      <Table striped>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {state.cartdata.map((a, i) => (
            <tr>
              <td>{state.cartdata[i].id}</td>
              <td>{state.cartdata[i].name}</td>
              <td>{state.cartdata[i].count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(addCount(state.cartdata[i].id));
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
