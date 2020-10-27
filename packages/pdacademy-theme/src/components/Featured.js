import React from "react";
import { connect } from "frontity";

const Featured = ({ state, imgID, element }) => {
  const media = state.source.attachment[imgID];

  return (
    element === "video" && (
      <>
        <img 
          src={media.media_details.sizes.medium_large.source_url} 
          alt={media.alt_text}
        />
      </>
    )
  );
};

export default connect(Featured);
