import React from "react";
import moment from "moment";

const TableRow = ({ term, timeShedule, timeFact, status,airportFrom, airportTo , flight, icon, name }) => {
  const classTerminalSpan = term === "A" ? "green" : "blue";
  const destination = airportFrom || airportTo;
  
  return (
    <li className="flights__table-row row">
      <div className="row__terminal">
        <span className={classTerminalSpan}>{term}</span>
      </div>
      <div className="row__timeShed">{moment(timeShedule).format("HH:mm")}</div>
      <div className="row__destination">{destination}</div>
      <div className="row__timeAct">{`${status === "DP" ? "Departed" : "Landed"} ${moment(timeFact).format("HH:mm")}`} </div>
      <div className="row__airline">
        <img src={icon} alt={name} />
        {name}
      </div>
      <div className="row__flight">{flight}</div>
    </li>
  );
};

export default TableRow;
