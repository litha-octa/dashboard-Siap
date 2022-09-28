import React, { Component } from "react";
import { Route, HashRouter, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import ListUser from './Pages/ListUser';
class App extends Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <HashRouter onUpdate={() => window.scrollTo(0, 0)}>
        <div>
          <Routes>
            <Route exact path="/*" element={<Home />} />
            <Route exact path="/all-user" element={<ListUser />} />
          </Routes>
        </div>
      </HashRouter>
    );
  }
}

export default App;
