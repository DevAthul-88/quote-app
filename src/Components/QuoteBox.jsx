import React from "react";
import { useDispatch } from "react-redux";
import { Bookmark } from "tabler-icons-react";
import { add } from "../features/bookmarkSlice";


function QuoteBox({ quote }) {
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
              className="btn btn-primary btn-rounded"
              title="Add to bookmark"
              onClick={() => {dispatch(add({id:quote._id ,content:quote.content,tags:quote.tags , author:quote.author , authorSlug:quote.authorSlug}))}}
            >
              <Bookmark size={28} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteBox;
