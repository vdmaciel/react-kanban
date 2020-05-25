import React from 'react';
import { Provider } from "react-redux";

import store from "./store";
import GlobalStyles from "./styles/Global";
import Routes from "./routes";

function App() {
  return (
    <Provider store={store}>
      <Routes/>
      <GlobalStyles />
    </Provider>
  );
}

export default App;
