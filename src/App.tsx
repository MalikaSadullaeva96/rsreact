import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import RouterComponent from "./components/RouterComponent/RouterComponent";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <RouterComponent />
    </Provider>
  );
}
export default App;
