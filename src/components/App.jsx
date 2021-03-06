// Libraries
import React from "react";
import {Provider} from "mobx-react";
import {BrowserRouter} from "react-router-dom";

// Components
import Routes from "./Routes";

// Stores
import rootStore from "../stores/Root";

// Utils
import * as blockchain from "../utils/blockchain";

// Convenient console access
window.blockchain = blockchain;
window.network = rootStore.network;
window.profile = rootStore.profile;
window.transactions = rootStore.transactions;
window.system = rootStore.system;

class App extends React.Component {
  render() {
    return (
      <Provider {...rootStore}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
