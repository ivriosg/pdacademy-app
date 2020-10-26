import React from "react";
import { connect } from "frontity";

const Featured = ({ state, imgID, element }) => {
  const media = state.source.attachment;

  const datos = media[imgID].source_url;
  return (
    element === "video" && (
      <>
       <img src= {datos} />
      </>
    )
  );
};

export default connect(Featured);
