import React from "react";

function Loader() {
  return (
    <div className="myspinner">
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden"></span>
        </div>
      </div>
    </div>
  );
}

export default Loader;
