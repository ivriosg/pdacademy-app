import React, { useEffect } from "react";
import { connect } from "frontity";
import Header from "./components/Header";
import Videos from "./pages/Videos";
import Pildoras from "./pages/Pildoras";
import Post from "./components/Post";
import Base from "./styles/Base";

const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link);

  /* Obtener URL de Videos y dejarla en el sistema */

  useEffect(() => {
    actions.source.fetch("/videos");
  }, []);

  return (
    <>
      <Base />
      <Header />
      <h1>Product Designer</h1>
      <hr />

      {data.isFetching && <p> Cargando Información </p>}
      {data.isHome && <p>Estamos en home</p>}
      {data.isVideoArchive && <Videos />}
      {data.isVideo && <Post element="video" />}
      {data.isPildoraArchive && <Pildoras />}
      {data.isPildora && <Post element="pildora" />}
      {data.isCursoArchive && <p>Estamos en Cursos</p>}
    </>
  );
};

export default connect(Root);
