import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Table() {
  const [products, setProducts] = useState([]);

  function displayProducts(response) {
    console.log(response.data);
    setProducts(response.data);
  }

  useEffect(() => {
    const mockApiUrl = `https://60a43063fbd48100179dbb84.mockapi.io/products`;
    axios.get(mockApiUrl).then(displayProducts);
  }, []);

  return (
    <div className="Table container">
      <div className="row">
        <div className="col-4 offset-4">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Amount</th>
                <th scope="col">Product</th>
              </tr>
            </thead>
            <tbody>
              {products.map((currentItem, index) => {
                return (
                  <tr key={index}>
                    <td>{currentItem.amount}</td>
                    <td>{currentItem.product}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
