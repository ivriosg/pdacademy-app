import React, { useEffect } from "react";
import { connect } from "frontity";
import Header from "./components/Header";
import Videos from "./pages/Videos";
import Pildoras from "./pages/Pildoras";
import Post from "./components/Post";
import Base from "./styles/Base";
import Home from "./pages/Home";

const Root = ({state,actions}) => {
  const data = state.source.get(state.router.link);

  // Obtener URL's en fetch para cargar el contenido
  useEffect(() => {
    actions.source.fetch("/pildoras");
    actions.source.fetch("/videos");
    actions.source.fetch("/inicio");
  }, []);

  return (
    <>
      <Base />
      <Header />
      <hr />

      {data.isFetching && <p> Cargando Información </p>}
      {data.isHome && <Home />}
      {data.isVideoArchive && <Videos />}
      {data.isVideo && <Post element="video" />}
      {data.isPildoraArchive && <Pildoras />}
      {data.isPildora && <Post element="pildora" />}
      {data.isCursoArchive && <p>Estamos en Cursos</p>}
      {data.isPage && <Post />}
    </>
  );
};

export default connect(Root);
