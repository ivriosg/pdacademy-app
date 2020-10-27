import React from "react";
import { connect } from "frontity";

const Post = ({ state, element }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];

  if (element === "video") {
    return (
      <>
        <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h2>
        <p>Duración: {post.acf.duracion_del_video}</p>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
      </>
    );
  } else if (element === "pildora") {
    
    // Obteniendo el ID de la temática para mostrarla
    const tematicaID = post.tematica[0];
    const tematica = state.source.tematica[tematicaID];
    return (
      <>
        <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h2>
        <p>Temática: {tematica.name}</p>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
      </>
    );
  } else {
    return <p>No soy un video</p>;
  }
};

export default connect(Post);
