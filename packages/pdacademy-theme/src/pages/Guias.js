import React from "react";
import { connect } from "frontity";
import Featured from "../components/Featured";
import Link from "../components/Link";

const Guias = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <h2>Guías disponibles</h2>

      {data.items.map(({ id }) => {
        const guia = state.source.guia[id];

        return (
          <article key={id}>
            <Link href={guia.link}>
              <Featured imgID={guia.featured_media} element="guia" />
              <h3
                dangerouslySetInnerHTML={{ __html: guia.title.rendered }}
              ></h3>
            </Link>
          </article>
        );
      })}
    </>
  );
};

export default connect(Guias);
