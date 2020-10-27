import React from "react";
import { connect } from "frontity";

const Featured = ({ state, imgID, element }) => {
<<<<<<< HEAD
  const media = state.source.attachment[imgID];

  return (
    element === "video" && (
      <>
        <img 
          src={media.media_details.sizes.medium_large.source_url} 
          alt={media.alt_text}
        />
=======
  const media = state.source.attachment;

  const datos = media[imgID].source_url;
  return (
    element === "video" && (
      <>
       <img src= {datos} />
>>>>>>> baab55fe188f31e14ab16528940fd01c6eca4c24
      </>
    )
  );
};

export default connect(Featured);
