import React from "react";
import { connect } from "frontity";
import Link from "../components/Link";
import Search from "../components/Search";

const Pildoras = ({ state, actions }) => {
  const data = state.source.get(state.router.link);

  /* Almacenar pildoras en una constante */
  const allPills = Object.values(state.source.pildora);

  /* Crear filtro para la buúsqueda*/
  const filteredPills = allPills.filter((pildora) =>
    pildora.title.rendered
      .toLowerCase()
      .includes(state.theme.searchPildoraValue.toLowerCase())
  );

  return (
    <>
      <h2>Píldoras: contenido de alto valor en dosis pequeñas</h2>
      <p>
        Trucos, tutoriales y artículos cortos de diseño, desarrollo y producto,
        listos para ser consumidos en menos de 1 minuto.
      </p>
      <h3>{data.items.length} píldoras disponibles.</h3>
      <Search />
      { !filteredPills.length > 0 && <p> No existen píldoras relacionados con: {state.theme.searchPildoraValue} </p>}
      {filteredPills.reverse().map((pildora) => {
        return (
          <article key={pildora.id}>
            <Link href={pildora.link}>
              <h3
                dangerouslySetInnerHTML={{ __html: pildora.title.rendered }}
              ></h3>
            </Link>
            <div
              dangerouslySetInnerHTML={{ __html: pildora.excerpt.rendered }}
            ></div>
          </article>
        );
      })}
    </>
  );
};

export default connect(Pildoras);
