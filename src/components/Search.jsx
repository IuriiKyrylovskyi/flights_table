import React from "react";
import { connect } from "react-redux";
import useLocalStorage from "../functions/useLocalStorage";
import { CgSearch } from "react-icons/cg";
import * as flightsAction from "../tasks/flights.actions";

const Search = ({ search, getSearchedFlight }) => {
  const [inputText, setInpitText] = useLocalStorage("search", search);

  const handleChange = (e) => {
    setInpitText(e.target.value.toUpperCase());
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (inputText) {
      return getSearchedFlight(inputText);
    }
    getSearchedFlight("");
  };

  return (
    <div className="search">
      <form
        className="search__form"
        onSubmit={handleSearch}
        //
      >
        <CgSearch />
        <input
          type="text"
          className="search__input"
          placeholder="flight #"
          onChange={handleChange}
          value={inputText}
          //
        />
        <button className="search__button">Search</button>
      </form>
    </div>
  );
};

const mapState = (state) => {
  return {
    search: state.flightsList.flight,
  };
};

const mapDispatch = {
  getSearchedFlight: flightsAction.getSearchedFlight,
};

export default connect(mapState, mapDispatch)(Search);
