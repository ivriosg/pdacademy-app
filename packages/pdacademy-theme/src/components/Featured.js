import React from'react'
import {connect} from 'frontity'

const Featured = ({ state, imgID, element }) => {
  const media = state.source.attachment[imgID]

  return element === 'video' && (
    <>
      <p>Imagen desde component {imgID} </p>
      <img src={media.media_details.sizes.medium.source_url} />
    </>
  )
}

export default connect(Featured)
