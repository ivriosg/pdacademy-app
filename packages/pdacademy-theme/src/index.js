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
    },
  },
  actions: {
    theme: {
      setSearchPildoraValue: ({ state }) => (value) => {
        state.theme.searchPildoraValue = value;
      },
    },
  },
};
