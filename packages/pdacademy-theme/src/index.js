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
      }
    },
  },
};
