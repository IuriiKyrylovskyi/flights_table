import React from "react";
import TableHeaderCeil from "./TableHeaderCeil";

const TableHeader = () => {
  const tableHeaderCeils = [
    {
      id: "1",
      text: "Terminal",
    },
    {
      id: "2",
      text: "Local Time",
    },
    {
      id: "3",
      text: "Destination",
    },
    {
      id: "4",
      text: "Status",
    },
    {
      id: "5",
      text: "Airline",
    },
    {
      id: "6",
      text: "Flight",
    },
  ];

  return (
    <ul className="flights__table-header">
      {tableHeaderCeils.map((ceil) => {
        return <TableHeaderCeil key={ceil.id} text={ceil.text} />;
      })}
    </ul>
  );
};

export default TableHeader;
