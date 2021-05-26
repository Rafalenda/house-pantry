import React from "react";
import axios from "axios";

export default function Add() {
  //
  function handleSubmit(event) {
    event.preventDefault();

    let newProduct = {
      product: event.target[0].value,
      amount: +event.target[1].value,
    };
    console.log(newProduct);
    const apiUrl = `https://60a43063fbd48100179dbb84.mockapi.io/products`;
    axios.post(apiUrl, newProduct).then();
  }

  return (
    <div className="Add">
      <div className="container">
        <h4 className="display-6">Add a new product:</h4>

        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6 offset-md-1">
            <span>
              <input
                type="text"
                className="form-control"
                placeholder="example: banana"
              />
            </span>
          </div>
          <div className="col-md-2">
            <span>
              <input
                type="number"
                className="form-control"
                placeholder="quant."
              />
            </span>
          </div>
          <div className="col-md-auto">
            <button type="submit" className="btn btn-primary mb-3">
              Add product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
