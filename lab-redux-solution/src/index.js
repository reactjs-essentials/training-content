import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import SharedContextProvider from "./context/SharedContext";
import counterReducer  from './reducers/counterReducer'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const store = configureStore({
  reducer : counterReducer,
})


root.render(
  
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);