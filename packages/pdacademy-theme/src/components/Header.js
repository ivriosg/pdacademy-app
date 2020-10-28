import React from "react";
import { connect, styled, css } from "frontity";
import Link from "./Link";
import Logo from "../assets/pda-logo.svg";
import Toogle from "../components/Toogle";
import MenuButton from '../components/MenuButton';

// Estilo para la navegación
const NavigationBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  margin: 2rem auto;
`;

// Estilo para el logo
const NavigationBarContentLeft = styled.div`
  & img:hover {
    transform: scale(1.05);
    transition: all 0.3s ease;
  }
`;

// Estilo para menú
const NavigationBarContentRight = styled.div`
  display: flex;
  align-items: center;
  & a {
    font-size: 14px;
    padding-left: 24px;
  }
`;

const NavLinks = styled.div`
  @media (max-width: 600px) {
    display:none;
  }
`;

const Header = () => {
  return (
    <>
      <NavigationBar>
        <NavigationBarContentLeft>
          <Link href="/">
            <img src={Logo} alt="Product Desgner Academy" />
          </Link>
        </NavigationBarContentLeft>
        <NavigationBarContentRight>
          <NavLinks>
            <Link href="/cursos">Curso</Link>
            <Link href="/videos">Videos</Link>
            <Link href="/pildoras">Pildoras</Link>
            <Link href="/por-que-product-designer-academy">Por qué PDA</Link>
            <Link href="/contactar">Contactar</Link>
          </NavLinks>
          <MenuButton />
          <Toogle />
        </NavigationBarContentRight>
      </NavigationBar>
    </>
  );
};

export default connect(Header);
