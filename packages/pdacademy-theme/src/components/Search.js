import React from "react";
import { connect } from "frontity";

const Search = ({ state, actions }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Busca una píldora..."
        value={state.theme.searchPildoraValue}
        onChange={(event) => {
          actions.theme.setSearchPildoraValue(event.target.value);
        }}
      />
      <pre>Search value: {state.theme.searchPildoraValue}</pre>
    </>
  );
};

export default connect(Search);
