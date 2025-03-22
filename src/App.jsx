import React from "react";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { MovieProvider } from "./context/MovieContext";

function App() {
  return (
    <MovieProvider>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </MovieProvider>
  );
}

export default App;
