import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import TempSolutions from "./components/layouts/TempSolutions";
import { Provider } from "react-redux";
import store from "./redux/store";

import { loadUser } from "./redux/actions/auth";

export class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <div id="wrapper">
          <TempSolutions />
        </div>
      </Provider>
    );
  }
}

export default App;
