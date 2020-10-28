import React from "react";
import {connect} from "frontity";
import Screenshot from "../assets/screenshot.jpg";

const Featured = ({ state, imgID, element }) => {
  const media = state.source.attachment[imgID];

  return (
    element === "video" && (
      <>
        {typeof media == "undefined" ? (
          <img src={Screenshot} />
        ) : (
          <img
            src={media.media_details.sizes.medium_large.source_url}
            alt={media.alt_text}
          />
        )}
      </>
    )
  );
};

export default connect(Featured);
