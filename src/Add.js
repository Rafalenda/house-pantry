import React, { useState } from "react";
import "./Add.css";
import axios from "axios";

export default function Add(props) {
  const [productName, setProductName] = useState(props.item?.product);
  const [productAmount, setProductAmount] = useState(props.item?.amount);

  function handleSubmit(event) {
    event.preventDefault();

    let newProduct = {
      product: event.target[0].value,
      amount: +event.target[1].value,
    };

    const apiUrl = `https://60a43063fbd48100179dbb84.mockapi.io/products`;

    if (!props.item) {
      axios.post(apiUrl, newProduct).then(props.onChange);
    } else {
      newProduct.id = props.item.id;
      axios.put(apiUrl + `/${props.item.id}`, newProduct).then(props.onChange);
    }
  }

  function keepProductName(event) {
    setProductName(event.target.value);
  }
  function keepProductAmount(event) {
    setProductAmount(event.target.value);
  }

  return (
    <div className="Add">
      <div className="container">
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6 offset-md-1">
            <span>
              <input
                type="text"
                className="form-control"
                placeholder="example: banana"
                onChange={keepProductName}
                value={productName}
              />
            </span>
          </div>
          <div className="col-md-2">
            <span>
              <input
                type="number"
                className="form-control"
                placeholder="quant."
                onChange={keepProductAmount}
                value={productAmount}
              />
            </span>
          </div>
          <div className="col-md-auto">
            <button type="submit" className="btn btn-success mb-3">
              ✔
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
