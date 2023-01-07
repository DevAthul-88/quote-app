import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import BookmarkBox from "../Components/BookmarkBox";
import { item } from "../features/bookmarkSlice";



function Bookmark() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.bookmark);
  useEffect(() => {
    dispatch(item());
  },[])
  return (
    <>
    <Helmet>
        <title>Quote App - Bookmark</title>
        <meta name="description" content="A app that gives you quotes" />
      </Helmet>
      <div className="mt-5">
        <h1>Bookmarks</h1>
        {items && items.length <= 0 || items == null ? <h5>No items</h5> : <>
            {items.map((e , index) => {
                return <BookmarkBox key={index} quote={e}/>
            })}
        </>}
      </div>
    </>
  );
}

export default Bookmark;
