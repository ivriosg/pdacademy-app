import React from 'react'
import {connect} from 'frontity'
import Link from './Link'

const Header = () => {
  return (
    <>
      <Link href = "/">Inicio</Link> //
      <Link href = "/cursos">Curso</Link> //
      <Link href = "/videos">Videos</Link> //
      <Link href = "/pildoras">Pildoras</Link> //
    </>
  )
}

export default connect(Header)