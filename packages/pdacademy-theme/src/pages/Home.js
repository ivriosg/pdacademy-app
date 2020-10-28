import React from "react";
import { connect } from "frontity";
import Link from "../components/Link";

const Home = ({ state }) => {
  const pageHero = state.source.page[210];
  const pildoras = state.source.pildora;

  return (
    <>
      <h1>Estamos en el Home</h1>
      {typeof pageHero == "undefined" ? null : (
        <p>{pageHero.acf.home_slogan}</p>
      )}
      <h2>Píldoras recientes</h2>
      {typeof pildoras == "undefined" ? (
        <p>Cargando píldoras recientes...</p>
      ) : (
        Object.values(pildoras)
          .reverse()
          .slice(0,3)
          .map((pildora) => {
            return (
              <article key={pildora.id}>
                <Link href={pildora.link}>
                  <h4
                    dangerouslySetInnerHTML={{ __html: pildora.title.rendered }}
                  ></h4>
                </Link>
              </article>
            );
          })
      )}
    </>
  );
};

export default connect(Home);
