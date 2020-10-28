import React from "react";
import { connect, Global, css } from "frontity";

const Base = ({ state }) => {
  // Almacenamos variable para verificar si esta activado el Dark Mode
  const { isDarkModeOn } = state.theme;

  /* Definiendo variables para CSS */
  const mainBlack = "#1a1a1a";
  const mainRed = "#f2322b";

  return (
    <Global
      styles={css`
      html {
        font-family: sans-serif;
      }
        body {
          margin: 0;
          background-color: ${isDarkModeOn == true ? mainBlack : "white"};
          color: ${isDarkModeOn == true ? "white" : "black"};
        }
        a {
          text-decoration: none;
          color: ${isDarkModeOn == true ? "white" : "black"};
          font-weight: bold;
        }
        a:hover {
          color: ${mainRed};
          transition: all 0.3s ease;
        }
        img {
          display: block;
        }
      `}
    />
  );
};

export default connect(Base);
