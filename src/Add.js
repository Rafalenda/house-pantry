import React from "react";

export default function Add() {
  return (
    <div className="Add">
      <div className="container">
        <h4 className="display-6">Add a new product:</h4>

        <form className="row g-3">
          <div className="col-6 offset-1">
            <span>
              <input
                type="text"
                className="form-control"
                placeholder="example: banana"
              />
            </span>
          </div>
          <div className="col-2">
            <span>
              <input
                type="number"
                className="form-control"
                placeholder="quant."
              />
            </span>
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3">
              Add product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
