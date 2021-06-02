import React, { useState } from "react";
import axios from "axios";

export default function Update() {
  const [displayForm, setDisplayForm] = useState(false);

  function handleClickEdit() {
    setDisplayForm(true);
  }

  return (
    <div>
      {displayForm && <span>This is a form</span>}
      {!displayForm && (
        <button
          type="submit"
          className="btn btn-dark  btn-sm"
          onClick={() => {
            handleClickEdit();
          }}
        >
          <small>edit</small>
        </button>
      )}
    </div>
  );
}
