import React from 'react';
import { Provider } from "react-redux";
import { ModalProvider } from "styled-react-modal";

import store from "./store";
import GlobalStyles from "./styles/Global";
import ModalBackground from "./styles/ModalBackground";
import Routes from "./routes";

function App() {
  return (
    <Provider store={store}>
      <ModalProvider backgroundComponent={ModalBackground}>
        <Routes />
        <GlobalStyles />
      </ModalProvider>
    </Provider>
  );
}

export default App;
