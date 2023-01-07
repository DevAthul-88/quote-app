import React from "react";
import { useDispatch } from "react-redux";
import { Trash } from "tabler-icons-react";
import { remove } from "../features/bookmarkSlice";


function BookmarkBox({ quote }) {
  const dispatch = useDispatch();
  return (
    <div className="card mt-5">
      <div className="card-body">
        <blockquote className="blockquote">
          <p>{quote && quote.content}</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Author: <cite title="Source Title">{quote && quote.author}</cite>
        </figcaption>
        <hr />
        <div className="row gx-5 mt-5">
          <div className="col-md-10 ">
            {" "}
            {quote &&
              quote.tags.map((e, index) => {
                return (
                  <span className="badge badge-primary" key={index}>
                    #{e}
                  </span>
                );
              })}
          </div>
          <div className="col-md-2">
            <button
              className="btn btn-danger btn-rounded"
              title="Remove from bookmark"
              onClick={() => {dispatch(remove({id:quote.id}))}}
            >
              <Trash size={28} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookmarkBox;
