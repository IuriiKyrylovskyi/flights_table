// https://www.mockapi.io/projects/60a936bc20a6410017306e80
// const baseUrl = "https://api.iev.aero/api/flights/10-02-2020";
const baseUrl = "https://api.iev.aero/api/flights";

 const year = new Date().getUTCFullYear();
 const month = new Date().getMonth() + 1;
 const dateNumber = new Date().getDate();

export const fetchFlightsList = () => {
  return fetch(`${baseUrl}/${dateNumber}-${month}-${year}`).then((response) => {
    // return fetch(baseUrl).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Failed to fetch");
  });
};


