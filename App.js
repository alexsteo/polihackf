import React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Root from "./components/Root";
import SpinnerThingy from "./components/SpinnerThingy";

import rootReducer from "./store/reducer";
const store = createStore(rootReducer);

export default function App() {
  return <SpinnerThingy />;
}
