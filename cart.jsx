import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletefunction, handlecountinc, handlecountdec } from "./redux";

function Cart(props) {
  const { img, title, description, price, id, count } = props;
  const dispatch = useDispatch();

  return (
    <>
      <div className="card">
        <img src={img} alt="" />
        <div className="content">
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="btn">
            <button
              onClick={() => dispatch(handlecountdec({ id }))}
              className="rbtn"
            >
              -
            </button>
            <p id="p">{count}</p>
            <button
              onClick={() => dispatch(handlecountinc({ id }))}
              className="abtn"
            >
              +
            </button>
          </div>
          <div className="price">
            <p>Price :₹{price}</p>
            <p id="pp">total price :₹{count * price}</p>
          </div>
          <button
            className="dbtn"
            onClick={() => dispatch(deletefunction({ id }))}
          >
            remove
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;