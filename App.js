import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Root from './components/Root';

import rootReducer from './store/reducer';
const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}
