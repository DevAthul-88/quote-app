import React, { memo , useCallback} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTags } from "../features/tagsSlice";



function Select({setTags , value}) {
  const { tags, error, loading } = useSelector((state) => state.tags);
  const dispatch = useDispatch();
  dispatch(getTags())
  const changeTag = useCallback((e) => {
    setTags(e);
  }, [value])
  return (
    <>
      {loading ? (
        "Loading....."
      ) : (
        <select className="form-control" onChange={(e => {changeTag(e.target.value)})} value={value}>
          {tags &&
            tags.map((e, index) => {
              return (
                <option key={index} value={e.name} >
                  {e.name}
                </option>
              );
            })}
        </select>
      )}
    </>
  );
}

export default memo(Select);
