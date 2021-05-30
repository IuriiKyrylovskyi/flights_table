import React, { useEffect } from "react";
import { connect } from "react-redux";
import TableRow from "./TableRow";
import * as flightsAction from "../tasks/flights.actions";

const FlightsTable = ({ flights, search, getFlightsList, isDepartures }) => {
  useEffect(() => {
    getFlightsList();
  }, [getFlightsList]);

  if (flights.length === 0) {
    return <p className="load">Loading ...</p>;
  }

  let flightsList = [];

  if (flights.length !== 0) {
    const allFlights = flights.flights.body;
    flightsList = isDepartures ? [...allFlights.departure] : [...allFlights.arrival];
  }
  if (search !== "") {
    flightsList = flightsList.filter((flightObj) => flightObj["codeShareData"][0]["codeShare"] === search.text);
  }
  if (flightsList.length === 0) {
    return <p className="load">No flights (</p>;
  }
 
  return (
    <ul className="flights__list">
      {flightsList.map((flightObj) => {
        const {
          ID,
          term,
          status,
          timeDepShedule,
          timeDepFact,
          timeArrShedule,
          timeLandFact,
          airline,
          codeShareData,
          //
        } = flightObj;

        const timeShedule = status === "DP" ? timeDepShedule : timeArrShedule;
        const timeFact = status === "DP" ? timeDepFact : timeLandFact;
        const airportTo = flightObj["airportToID.city_en"];
        const airportFrom = flightObj["airportFromID.city_en"];
        const flight = codeShareData[0]["codeShare"];
        const icon = codeShareData[0]["airline"]["en"]["logoSmallName"];
        const name = codeShareData[0]["airline"]["en"]["name"];

        return (
          <TableRow
            key={ID}
            term={term}
            timeShedule={timeShedule}
            timeFact={timeFact}
            status={status}
            airportTo={airportTo}
            airportFrom={airportFrom}
            icon={icon}
            airline={airline}
            flight={flight}
            name={name}
            //
          />
        );
      })}
    </ul>
  );
};

const mapState = (state) => {
  return {
    flights: state.flightsList.flights.length ? state.flightsList.flights : localStorage.getItem("flights") ? JSON.parse(localStorage.getItem("flights")) : [],
    search: state.flightsList.flight,
  };
};

const mapDispatch = {
  getFlightsList: flightsAction.getFlightsList,
};

export default connect(mapState, mapDispatch)(FlightsTable);
