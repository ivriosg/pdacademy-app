import React from "react";
import Root from "./Root";

export default {
  name: "pdacademy-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {
      searchPildoraValue: "",
      // Configurar Dark Mode
      isDarkModeOn: false,
      // Configurar menu movil
      isMobileMenuOpen: false,
    },
  },
  actions: {
    theme: {
      setSearchPildoraValue: ({ state }) => (value) => {
        state.theme.searchPildoraValue = value;
      },
      // Configurando variables para prender y apagar el Dark Mode
      setDarkModeOn: ({state}) => {
        state.theme.isDarkModeOn = true;
      },
      setDarkModeOff: ({state}) => {
        state.theme.isDarkModeOn = false;
      },
      // Configuramos variables para abrir y cerrar el menu movil
      toogleMobileMenu: ({state}) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({state}) => {
        state.theme.isMobileMenuOpen = false;
      }
    },
  },
};
