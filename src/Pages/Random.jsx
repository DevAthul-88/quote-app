import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Refresh } from "tabler-icons-react";
import Error from "../Components/Error";
import Loader from "../Components/Loader";
import QuoteBox from "../Components/QuoteBox";
import Select from "../Components/Select";
import {
  getQuotes,
  getQuotesError,
  getQuotesStatus,
  selectAllQuotes,
} from "../features/random/randomSlice";

function Random() {
  const [tag, setTags] = useState("");
  const dispatch = useDispatch();
  function fetchQuotes() {
    dispatch(getQuotes(tag));
  }
  useEffect(() => {
    fetchQuotes();
  }, [tag]);
  const quote = useSelector(selectAllQuotes);
  const loading = useSelector(getQuotesStatus);
  const error = useSelector(getQuotesError);

  return (
    <div>
      <Helmet>
        <title>Quote App - Random</title>
        <meta name="description" content="A app that gives you quotes" />
      </Helmet>
      {loading === "failed" && <Error error={error} />}
      {loading === "loading" ? (
        <Loader />
      ) : (
        <>
          {loading === "idle" && (
            <>
              <div className="row gx-5 mt-5">
                <div className="col-md-6 ">
                  <h1>Random quotes</h1>
                </div>
                <div className="col-md-4">
                  <Select setTags={setTags} value={tag}/>
                </div>
              </div>
              <QuoteBox quote={quote && quote} />{" "}
              <div className="text-center mt-4">
                <button
                title="New quote"
                  className="btn btn-rounded btn-primary text-white text-center"
                  onClick={() => {
                    fetchQuotes();
                  }}
                >
                  <Refresh size={28} strokeWidth={2} />
                </button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Random;
