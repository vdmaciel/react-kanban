import React from 'react';
import { Provider } from "react-redux";

import store from "./store";
import GlobalStyles from "./styles/Global";

function App() {
  return (
    <Provider store={store}>
      <div>Hello World!</div>
      <GlobalStyles />
    </Provider>
  );
}

export default App;
