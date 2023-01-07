import React, { useState } from "react";

function Error({ error }) {
  const [show, setShow] = useState(true);
  return (
    <>
      {error && (
        <>
          {show && (
            <div
              className="alert alert-danger mt-5 alert-dismissible fade show"
              role="alert"
            >
              {error}
              <button
                type="button"
                className="btn btn-light btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={() => {
                  setShow(!show);
                }}
              >X</button>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default Error;
