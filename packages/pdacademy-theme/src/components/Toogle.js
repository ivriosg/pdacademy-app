import React from "react";
import { connect, styled, css } from "frontity";
import Moon from "../assets/moon.png";
import Sun from "../assets/sun.png";

// Importanto assets para el Toogle

const Toogle = ({ state, actions }) => {
  const { isDarkModeOn } = state.theme;
  const { setDarkModeOn } = actions.theme;
  const { setDarkModeOff } = actions.theme;

  if (isDarkModeOn == "true") {
    return (
      <ButtonStyled onClick={ setDarkModeOff }>
        <img src={Sun} />
      </ButtonStyled>
    )
  } else {
    return (
      <ButtonStyled onClick={ setDarkModeOn }>
        <img src={Moon} />
      </ButtonStyled>
    )
  }
};

const ButtonStyled = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  & img {
    width: 24px;
    margin-left: 24px;
    transition: all .3s ease-in-out;
  }
  & img:hover {
    transform: scale(1.2);
  }
`;

export default connect(Toogle);
