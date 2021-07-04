import {createStore} from 'redux';
import rootReducer from './reducers/rootReducer';
import {loadState, saveState} from "./localStorage";
import {createWrapper} from 'next-redux-wrapper';

function  makeStore() {
  const persistedState = loadState();
  const store = createStore(
    rootReducer,
    persistedState
  );

  store.subscribe(() => {
    saveState({
      cart: store.getState().cart,
      recentView: store.getState().recentView
    });
  });

  return store
}

export const  wrapper = createWrapper(makeStore, {debug: true});