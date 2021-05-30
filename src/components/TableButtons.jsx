import React from "react";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaPlaneArrival } from "react-icons/fa";

const TableButtons = ({ isDepartures, handleDepartures }) => {
  return (
    <div className="flights__header">
        <button
          className="btn"
          onClick={handleDepartures}
          disabled={isDepartures}
          //
        >
          <FaPlaneDeparture /> Departures
        </button>
      <button
        className="btn"
        onClick={handleDepartures}
        disabled={!isDepartures}
        //
      >
        <FaPlaneArrival /> Arrivals
      </button>
    </div>
  );
};

export default TableButtons;
