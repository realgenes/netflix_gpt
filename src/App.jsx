import React from "react";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { MovieProvider } from "./context/MovieContext";

function App() {
  return (
    <div className="overflow-x-hidden">
      <MovieProvider>
        <Provider store={appStore}>
          <Body />
        </Provider>
      </MovieProvider>
    </div>
  );
}

export default App;
