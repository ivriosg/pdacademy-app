import React from 'react'
import {connect} from 'frontity'
import Featured from '../components/Featured'

const Videos = ({state}) => {

  const data = state.source.get(state.router.link)

  return (
    <>
      <h2>Vídeos</h2>
      <p>Videotutoriales de diseño, programación y desarrollo de producto de menos de 5 minutos. Ahorra tiempo, en todos los sentidos.</p>
      <h3>Videos disponibles ({data.items.length})</h3>
      { data.items.map( ({id}) => {
        
        const video = state.source.video[id]

        return(
          <article key={id}>
            <Featured 
              imgID = {video.featured_media}
              element = "video"
            />
            <h3 dangerouslySetInnerHTML = {{ __html: video.title.rendered}}></h3>
            <span>Duración: {video.acf.duracion_del_video}</span>
          </article>

        )
      })}
    </>
  )
}

export default connect(Videos)