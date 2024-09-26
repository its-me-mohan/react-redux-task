import React from "react";
import Cart from "./cart";
import { useSelector, useDispatch } from "react-redux";

function Addtocart() {
  const list = useSelector((state) => state.phone.list);

  const handlealart = () => {
    if (total == 0) {
      alert("cart is empty");
    } else {
      alert("Thanks for Order");
    }
  };

  const total = list.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <>
      <div className="top">
        <h1>My Shopping</h1>
      </div>
      {list.map((val, i) => (
        <Cart
          key={val.id}
          id={val.id}
          title={val.title}
          img={val.images[1]}
          description={val.description}
          price={val.price}
          count={val.count}
        />
      ))}
      <div className="bottom">
        <div className="end">
          <p>Sub Total :₹{total}</p>
          <p>Shipping : Free</p>
          <h3>Grand Total :₹{total}</h3>
          <hr />
          <button className="cbtn" onClick={() => handlealart()}>
            Check Out
          </button>
        </div>
      </div>
    </>
  );
}

export default Addtocart;