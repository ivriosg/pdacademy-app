import React from 'react';
import {connect} from 'frontity'
import Header from './components/Header'
import Videos from './pages/Videos'

const Root = ({state}) => {

  const data = state.source.get(state.router.link)

  return (
    <>
    <Header />
      <h1>Product Designer</h1>
      <hr />
      
      { data.isFetching && <p> Cargando Información </p>}
      { data.isHome && <p>Estamos en home</p> }
      { data.isVideoArchive && <Videos /> }
      { data.isCursoArchive && <p>Estamos en Cursos</p> }
    </>
  );
};

export default connect(Root)