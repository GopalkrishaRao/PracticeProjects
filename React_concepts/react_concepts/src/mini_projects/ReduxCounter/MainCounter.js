import React from 'react';
import { Provider } from 'react-redux';
import store from './Store/store';
import Counter from './Counter';

export default function MainCounter() {
  return (
    <>
    <Provider store={store}>
        <div>Counter</div>
        <Counter/>
    </Provider>
    </>
  )
};
