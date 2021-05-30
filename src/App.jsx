import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import Search from "./components/Search";
import Flights from "./components/Flights";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="main">
          <h1 className="main__title">Search flight</h1>
          <Search />
          <Flights />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
