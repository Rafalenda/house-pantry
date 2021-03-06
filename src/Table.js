import React, { useEffect, useState } from "react";
import Add from "./Add";
import axios from "axios";

export default function Table() {
  const [products, setProducts] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(0);
  const [productEdited, SetProductEdited] = useState(null);

  //1
  function displayProducts(response) {
    setProducts(response.data);
  }

  useEffect(() => {
    const mockApiUrl = `https://60a43063fbd48100179dbb84.mockapi.io/products`;
    axios.get(mockApiUrl).then(displayProducts);
  }, [lastUpdate]);

  //2
  function handleClickDelete(id) {
    const apiUrl = `https://60a43063fbd48100179dbb84.mockapi.io/products/${id}`;
    axios.delete(apiUrl).then(() => {
      setLastUpdate(lastUpdate + 1);
    });
  }

  //3
  function addItem() {
    setLastUpdate(lastUpdate + 1);
  }

  return (
    <div className="Table container">
      <Add
        onChange={() => {
          addItem();
        }}
      />
      <div className="row">
        <h6 className="display-6">Your current list of products</h6>
        <div className="col-md-6 offset-md-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Amount</th>
                <th scope="col">Product</th>
              </tr>
            </thead>
            <tbody>
              {products.map((currentItem) => {
                let columns = [];

                columns.push(
                  <td
                    key="0"
                    onClick={() => {
                      SetProductEdited(currentItem.id);
                    }}
                  >
                    {currentItem.amount}
                  </td>
                );

                columns.push(
                  <td
                    key="1"
                    onClick={() => {
                      SetProductEdited(currentItem.id);
                    }}
                  >
                    {currentItem.product}
                  </td>
                );

                columns.push(
                  <td key="2">
                    <button
                      type="submit"
                      className="btn btn-danger  btn-sm"
                      onClick={() => {
                        handleClickDelete(currentItem.id);
                      }}
                    >
                      X
                    </button>
                  </td>
                );

                return (
                  <tr key={currentItem.id}>
                    {currentItem.id === productEdited ? (
                      <td colSpan="4">
                        <Add
                          onChange={() => {
                            SetProductEdited(null);
                            addItem();
                          }}
                          item={currentItem}
                        />
                      </td>
                    ) : (
                      columns
                    )}
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
