import { fetchFlightsList } from "../gateway";

export const FLIGHTS = "FLIGHTS/FLIGHTS";
export const SEARCH = "FLIGHTS/SEARCH";

export const flightsListRecieved = (flights) => {
  return {
    type: FLIGHTS,
    payload: {
      flights,
    },
  };
};

export const getSearchedFlight = (text) => {
  return {
    type: SEARCH,
    payload: {
      text,
    },
  };
};

export const getFlightsList = () => {
  return function (dispatch) {
    fetchFlightsList().then((flights) => {
      localStorage.setItem("flights", JSON.stringify({ flights }));
      dispatch(flightsListRecieved(flights));
    });
  };
};


